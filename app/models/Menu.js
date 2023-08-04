export class MENU {
  danhSachMonAn = []; // [{maMon: 1, tenMon: "Cơm chiên"},{maMon:2, tenMon :"Nuôi"}]

  layMonAn = function(){
       // Kiểm tra storage có mảng đó hay không => mới lấy ra 
    if (localStorage.getItem('arrMonAn')) {
        let sMangMonAn = localStorage.getItem('arrMonAn');
       this.danhSachMonAn = JSON.parse(sMangMonAn);
    }
  }
  luuMonAn = function(){

      // Biến đổi mảng món ăn thành chuối
      this.danhSachMonAn = JSON.stringify(arrMonAn);
      localStorage.setItem('arrMonAn', sMangMonAn);
  }
}
