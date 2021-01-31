function twoNumberSum(arr, target) {
  output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        output.push([i, j]);
      }
    }
  }
  if (output.length == 0) {
    console.log("Không tìm thấy");
  } else {
    for (let pair of output) console.log(pair + "; ");
  }
}

let input_arr = [];
let N = +prompt("Số phần tử trong mảng là: ");
for (let i = 0; i < N; i++) {
  let num = +prompt("Nhập phần tử trong mảng");
  input_arr.push(num);
}
let M = +prompt("Tổng muốn tìm là:");
twoNumberSum(input_arr, M);
