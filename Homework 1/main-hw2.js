import { Student } from "./hw2.js";
var studentArray = [new Student(7, 7), new Student(9, 10), new Student(3, 2)];

function tinhDiem(arr) {
  let summary = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
  };
  for (const student of arr) {
    if (student.diemTongKet() >= 8) {
      summary.A += 1;
    } else if (student.diemTongKet() >= 7) {
      summary.B += 1;
    } else if (student.diemTongKet() >= 6) {
      summary.C += 1;
    } else if (student.diemTongKet() >= 4) {
      summary.D += 1;
    } else {
      console.log(student.diemTongKet());
      summary.F += 1;
    }
  }
  console.log(`Xác suất 1 sinh viên bất kì đạt B là ${summary.B / arr.length}`);
  console.log("Số sinh viên đạt A là " + summary.A);
  console.log("Số sinh viên bị trượt là " + summary.F);
}

tinhDiem(studentArray);
