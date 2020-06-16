import { decorate, observable } from "mobx";

export class Store {
  cart = [];

  addToCart = (product) => {
    this.cart.push(product);
  };

  removeFromCart = (product) => {
    this.cart = this.cart.filter((prod) => prod.id !== product.id);
  };
}

decorate(Store, {
  cart: observable,
  addToCart: observable,
  removeFromCart: observable,
});
