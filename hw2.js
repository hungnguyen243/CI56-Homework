export class Student {
  constructor(diemTP, diemCuoiki) {
    this.diemTP = diemTP;
    this.diemCuoiki = diemCuoiki;
  }
  diemTongKet() {
    return 0.4 * this.diemTP + 0.6 * this.diemCuoiki;
  }
}
