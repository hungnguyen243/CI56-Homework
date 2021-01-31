import Employee from "./Employee.js";

export default class Developer extends Employee {
  constructor(name, taskList) {
    super(name, taskList, undefined);
  }
}
