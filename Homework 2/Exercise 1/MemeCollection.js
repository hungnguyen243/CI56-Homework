import { Meme } from "./Meme.js";

export class MemeCollection {
  id;
  name;
  owner;
  memes = [];

  constructor(id, name, owner) {
    this.id = id;
    this.name = name;
    this.owner = owner;
  }
  add(meme) {
    this.memes.push(meme);
  }

  update(id, data) {
    for (let meme of this.memes) {
      if (meme.id == id) {
        meme.update(data);
      }
    }
  }

  delete(id) {
    for (let i = 0; i < this.memes.length; i++) {
      if (this.memes[i].id == id) {
        this.memes.splice(i, 1);
      }
      let toDelete = document.getElementById(id);
      toDelete.remove();
    }
  }

  show() {
    for (let meme of this.memes) {
      meme.show();
    }
  }
}

var meme1 = new Meme("meme1", "funny meme", "./meme1.jpg", "22/1/2021");
var meme2 = new Meme("meme2", "wiki meme", "./meme2.jpg", "23/1/2021");

var memeCol = new MemeCollection("MC1", "Memes", "Hung");
memeCol.add(meme1);
memeCol.add(meme2);
memeCol.show();
memeCol.delete("meme1");
