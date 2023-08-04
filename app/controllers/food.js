/**
 *  Thêm thông tin và hiển thị thông tin 
 */

// import từ MonAn
import { LOAI_MON } from '../models/constant/constant.js';
import { TINH_TRANG } from '../models/constant/constant.js';
import { MonAn } from '../models/MonAn.js';
import { MENU } from '../models/Menu.js';

// Ngôn ngữ
import { translate } from '../translate/Vi.js';

// ---- Cách 1: Dùng LocalStorage lưu và lấy dữ liệu => lặp lưu và lấy dữ liệu ( food + food-list) => khó bảo trì, chỉnh sửa
// let arrMonAn = [];

//==== Cách 2: dùng HĐT Menu
let menu = new MENU();

menu.layMonAn();
console.log('menu',menu);


document.querySelector('#btnThemMon').onclick = function () {

    let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');
    // console.log('arrInput',arrInput);
    // [maMon:'', tenMon:'',.....]
    // Lấy thông tin người dùng nhập từ giao diện
    let mon = new MonAn();
    for (let input of arrInput) { // for of
        // let id = input.id;
        // let value = input.value;
        let { id, value } = input; // destructuring
        mon[id] = value;// dynamic key

    }

    // mon = {maMon:'', tenMon:'',....., tinhGiaKhuyenMai(){}}
    //out put : html
    let html = '';
    for (let key in mon) { // Duyệt qua các thuộc tính của object món ăn tạo ra các li tương ứng

        let giaTri = mon[key];

        if (typeof mon[key] == 'function') { // Gọi hàm
            giaTri = mon[key]();
        }
        switch (key) {
            case 'loai': {
                giaTri = LOAI_MON[mon[key]];

            }; break;
            case 'tinhTrang': {
                giaTri = TINH_TRANG[mon[key]];

            }; break;
            case 'hinhMon': {

                giaTri = `<img src="${mon[key]}" width ="200px" height = "100px"/>`
            }
        }
        html += ` <li 
                    class="list-group-item d-flex justify-content-between lh-condensed" >
                    <div>
                         <h6 class="my-0">${translate[key]}</h6>
                     </div>
                    <span id="sp-${key}" class="text-muted">${giaTri}</span>
                </li>`;
    }
    // DOM đến thẻ ul hiển thị nội dung li
    document.querySelector('ul.list-group').innerHTML = html;

    //Lưu món ăn vào mảng món ăn
    // arrMonAn.push(mon);
    // luuMonAn();
    // menu.danhSachMonAn.push(mon);
    menu.luuMonAn();

}

// ===== Cách 1
// // Lưu vào LocalStorge
// function luuMonAn() {
//     // Biến đổi mảng món ăn thành chuối
//     let sMangMonAn = JSON.stringify(arrMonAn);
//     localStorage.setItem('arrMonAn', sMangMonAn);
// }

// function layMonAn() {
//     // Kiểm tra storage có mảng đó hay không => mới lấy ra 
//     if (localStorage.getItem('arrMonAn')) {
//         let sMangMonAn = localStorage.getItem('arrMonAn');
//         arrMonAn = JSON.parse(sMangMonAn);
//     }

// }

// Đợi html load xong thì các hàm trong function này được gọi

// window.onload = function () {
//     layMonAn();

// }
