import Employee from "./Employee.js";

export default class Manager extends Employee {
  constructor(name, taskList, employeeList) {
    super(name, taskList, employeeList);
  }

  addEmployee(e) {
    this.employeeList.push(e.name);
  }
}
