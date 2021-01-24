export class Product {
  id;
  name;
  price;
  producer;
  discount;
  receiptDate;

  constructor(id, name, price, producer, discount, receiptDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.producer = producer;
    this.discount = discount;
    this.receiptDate = receiptDate;
  }

  purchase() {}

  sell() {}
}
