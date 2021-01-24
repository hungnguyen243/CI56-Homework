import { Product } from "./Product.js";
export class Food extends Product {
  taste;

  constructor(id, name, price, producer, receiptDate, taste) {
    super(id, name, price, producer, 2, receiptDate);
    this.taste = taste;
  }
}
