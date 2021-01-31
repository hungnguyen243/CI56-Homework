import Sheep from "./Sheep.js";

var sheeps = [];
sheeps.push(new Sheep("A", 1));
sheeps.push(new Sheep("B", 3));
sheeps.push(new Sheep("C", 4));

function FurTrimmingSum(M) {
  let output = 0;
  for (var i = 0; i < M; i++) {
    for (let sheep of sheeps) {
      sheep.weight += 2;
    }
    console.log(sheeps);
    let weights = [];
    for (let sheep of sheeps) {
      weights.push(sheep.weight);
    }
    let max_weight = Math.max(...weights);
    if (max_weight > 3) {
      output += max_weight;
      for (let sheep of sheeps) {
        if (sheep.weight == max_weight) {
          sheep.weight = 1;
        }
      }
    }
    console.log(output);
    return;
  }
}
let months = +prompt("Nhập số lượng tháng:");
FurTrimmingSum(months);

function binarySearch(A, n, T) {
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (A[m] < T) {
      l = m + 1;
    } else if (A[m] > T) {
      r = m - 1;
    } else {
      return m;
    }
    return "không thành công";
  }
}

let weightToFind = +prompt("Nhập khối lượng lông cần tìm:");
let foundSheepIdx = binarySearch(sheeps, sheeps.length, weightToFind);
if (foundSheepIdx != "không thành công") {
  console.log(sheeps[foundSheepIdx].name);
} else {
  console.log("Không có con cừu nào thoả mãn");
}
