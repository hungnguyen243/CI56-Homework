//B1:

var arr = prompt("Enter your numbers").split(",");

function primeNumber(array) {
  // var array = [];
  // for (var i = 0; i < n; i++) {
  //   array.push(+prompt("Enter a number"));
  // }
  // console.log("OK");
  for (const num of array) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}

primeNumber(arr);
