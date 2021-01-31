import Developer from "./Developer.js";
import Test from "./Test.js";
import Manager from "./Manager.js";

let e1 = new Developer("Hung", "fix web app 1");
e1.displayInfo();
let e2 = new Developer("Ha", "fix web app 2");
let e3 = new Test("Dung", "test web app 2");
let e4 = new Manager("Giang", "quan li web app 1", [e1.name, e2.name]);
let e5 = new Manager("Chi", "quan li web app 2", [e3.name]);
e5.addEmployee(e4);
e5.displayInfo();
