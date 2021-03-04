function sortFunc(list1, list2) {
    let output = [];
    let i = 0;
    let j = 0;
    let shorterLength = Math.min(list1.length, list2.length);
    while (i < shorterLength && j < shorterLength) {
        if (list1[i] <= list2[j]) {
            output.push(list1[i]);
            i++;
        } else {
            output.push(list2[j]);
            j++;
        }
    }
    if (i === shorterLength) {
        for (k = j; k < list2.length; k++) {
            output.push(list2[k]);
        }
    } else if (j === shorterLength) {
        for (k = i; k < list1.length; k++) {
            output.push(list2[k]);
        }
    }
    console.log(output);
}

let list1 = prompt("Nhập vào dãy số 1: ");
let list2 = prompt("Nhập vào dãy số 2");
list1 = list1.split(",");
list1.map((ele) => parseInt(ele));
list2 = list2.split(",");
list2.map((ele) => parseInt(ele));
sortFunc(list1, list2);
