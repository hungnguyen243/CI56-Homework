import { Product } from "./Product.js";

export class HouseholdApp extends Product {
  durability;

  constructor(id, name, price, producer, receiptDate, durability) {
    super(id, name, price, producer, 10, receiptDate);
    this.durability = durability;
  }
}
