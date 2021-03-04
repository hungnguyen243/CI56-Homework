function sortFunc(list1, list2) {
    let output = [];
    let i = 0;
    let j = 0;
    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            output.push(list1[i]);
            i++;
        } else {
            output.push(list2[j]);
            j++;
        }
    }
    if (i === list1.length) {
        for (j; j < list2.length; j++) {
            output.push(list2[j]);
        }
    } else if (j === list2.length) {
        for (i; i < list1.length; i++) {
            output.push(list1[i]);
        }
    }
    console.log(output);
}

let list1 = prompt("Nhập vào dãy số 1: ");
let list2 = prompt("Nhập vào dãy số 2");
list1 = list1.split(",");
console.log(list1);
list1 = list1.map((ele) => parseInt(ele.trim()));
list2 = list2.split(",");
console.log(list2);
list2 = list2.map((ele) => parseInt(ele.trim()));
sortFunc(list1, list2);
