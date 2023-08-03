// import từ MonAn
import { LOAI_MON } from '../models/constant/constant.js';
import { TINH_TRANG } from '../models/constant/constant.js';
import { MonAn } from '../models/MonAn.js';

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

            };break;
        }
        html += ` <li 
                    class="list-group-item d-flex justify-content-between lh-condensed" >
                    <div>
                         <h6 class="my-0">${key}</h6>
                     </div>
                    <span id="sp-${key}" class="text-muted">${giaTri}</span>
                </li>`;
    }
    // DOM đến thẻ ul hiển thị nội dung li
    document.querySelector('ul.list-group').innerHTML = html;

}