
import { MENU } from "../models/Menu.js";


//==== Cách 1: Lấy dữ liệu từ LocalStorage ra

// let arrMonAn = [];

// window.onload = function(){
//     // Trang food-list.html load xong thì lấy dữ liệu từ localStorage gán vào mảng món ăn
//     layMonAn();
//     console.log('arrMonAn',arrMonAn);

// }
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


let menu = new MENU();
// Lấy dữ liệu từ LocalStorage ra đưa vào thuộc tính của menu.danhSachMonAn
menu.layMonAn();
console.log('menu', menu);