function createUser(data) {
  firebase.firestore().collection("employees").add(data);
}
