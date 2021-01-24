export class Meme {
  id;
  name;
  image;
  dateModified;

  constructor(id, name, image, dateModified) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.dateModified = dateModified;
  }

  show() {
    //Create new div for the memem
    let memeDiv = document.createAttribute("id");
    memeDiv.value = this.id;
    let memeNode = document.createElement("div");
    memeNode.setAttributeNode(memeDiv);
    document.getElementById("meme-collection").appendChild(memeNode);

    let nameDiv = document.createAttribute("class");
    nameDiv.value = "name";
    let nameNode = document.createElement("div");
    nameNode.setAttributeNode(nameDiv);

    let imageNode = document.createElement("img");

    let dateDiv = document.createAttribute("class");
    dateDiv.value = "date";
    let dateNode = document.createElement("div");
    dateNode.setAttributeNode(dateDiv);

    memeNode.appendChild(nameNode);
    memeNode.appendChild(imageNode);
    memeNode.appendChild(dateNode);

    nameNode.innerHTML = this.name;
    imageNode.src = this.image;
    dateNode.innerHTML = this.dateModified;
  }

  update(data) {
    updates = Object.keys(data);
    for (let key in this) {
      if (updates.indexOf(key) == -1) {
        this.key = updates.indexOf(key);
      }
    }
  }
}
