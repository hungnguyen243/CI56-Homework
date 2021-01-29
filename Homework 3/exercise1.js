async function readAllUsers() {
  let result = await firebase.firestore().collection("users").get();
  for (let document of result.docs) {
    console.log(document.id, document.data());
  }
}

async function readAllAdmins() {
  let result = await firebase.firestore().collection("admins").get();
  for (let document of result.docs) {
    console.log(document.id, document.data());
  }
}

async function readAllMovies() {
  let result = await firebase.firestore().collection("movies").get();
  for (let document of result.docs) {
    console.log(document.id, document.data());
  }
}

async function readMoviesByName(value) {
  let result = await firebase
    .firestore()
    .collection("movies")
    .orderBy("name")
    .startAt(value)
    .endAt(value + "\uf8ff")
    .get();
  for (let document of result.docs) {
    console.log(document.id, document.data());
  }
}

readAllUsers();
readAllAdmins();
readAllMovies();
let movie = prompt("Nhập tên phim muốn tìm:");
readMoviesByName(movie);
