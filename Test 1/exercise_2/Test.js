import Employee from "./Employee.js";

export default class Test extends Employee {
  constructor(name, taskList) {
    super(name, taskList, undefined);
  }
}
