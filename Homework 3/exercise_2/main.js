import Person from "./person.js";

let person_1 = new Person("A", 16, "male", ["B", "C", "E"], ["D"]);
let person_2 = new Person("B", 18, "male", ["A", "D"], ["C", "E"]);
let person_3 = new Person("C", 19, "female", ["A", "E"], ["B", "D"]);
let person_4 = new Person("D", 20, "female", ["B", "E"], ["A", "C"]);
let person_5 = new Person("E", 18, "male", ["A", "C", "D"], ["B"]);

let people_arr = [person_1, person_2, person_3, person_4, person_5];

function relationshipSearch(personName) {
  for (let person of people_arr) {
    if (person.name == personName) {
      var personToFind = person;
      console.log(personToFind);
    }
  }
  let output = [];
  for (let acquaintance of personToFind.acquaintances) {
    output.push(acquaintance);
  }
  console.log("Người thân của B là: " + output);
}

let personName = prompt("Nhập tên 1 người");
relationshipSearch(personName);
