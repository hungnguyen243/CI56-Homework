function createUser(data) {
  firebase.firestore().collection("employees").add(data);
}

// 3 collections: Developer, Test, Manager
// Fields chung: name, taskList
// Manager thêm field employeeList
