import { Product } from "./Product.js";

export class Clothes extends Product {
  origin;
  material;

  constructor(id, name, price, producer, receiptDate, origin, material) {
    super(id, name, price, producer, 5, receiptDate);
    this.origin = origin;
    this.material = material;
  }
}
