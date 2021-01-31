export default class Employee {
  name;
  taskList;
  employeeList;

  constructor(name, taskList, employeeList) {
    this.name = name;
    this.taskList = taskList;
    this.employeeList = employeeList;
  }

  displayInfo() {
    console.log("Tên nhân viên: " + this.name);
    console.log("List công việc: " + this.taskList);
    if (this.employeeList) {
      console.log("Danh sach nhân viên quản lí: " + this.employeeList);
    }
  }
}
