import { HouseholdApp } from "./Product/HouseholdApp.js";
import { Food } from "./Product/Food.js";
import { Clothes } from "./Product/Clothes.js";
import { Product } from "./Product/Product.js";

export class Inventory {
  static products = [];
  static revenue = 0;

  //Nhập hàng hoá
  static receive(product) {
    this.products.push(product);
    console.log(this.products);
  }

  //Bán hàng
  static sell(id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        let productToSell = this.products[i];
        this.revenue +=
          productToSell.price * (1 - productToSell.discount / 100);
      }
    }
  }

  //Check doanh thu
  static checkRevenue() {
    console.log("Doanh thu bán hàng là: " + this.revenue);
  }
}

let product_1 = new HouseholdApp(
  "H1",
  "refrigerator",
  500,
  "LG",
  "25/1/2021",
  "good"
);
let product_2 = new Clothes(
  "C1",
  "dress",
  1000,
  "LV",
  "25/1/2021",
  "Italy",
  "silk"
);

let product_3 = new Food("F1", "pizza", 10, "Pizza Hut", "26/1/2021", "tasty");
Inventory.receive(product_1);
Inventory.receive(product_2);
Inventory.receive(product_3);
Inventory.sell("H1");
Inventory.checkRevenue();
