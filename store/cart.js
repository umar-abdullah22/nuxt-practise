import { defineStore } from 'pinia';
import data from '../data.json';
const products = data.products.phones;
export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: {},
    theme: 'light',
  }),
  getters: {
    getCartItems() {
      return Object.keys(this.cartItems).map((item) => {
        const product = this.cartItems[item];
        const mainProduct = products.find((p) => p.id === product.productId);
        return {
          id: product.productId,
          image: mainProduct.imageUrl,
          name: mainProduct.name,
          price: mainProduct.price,
          quantity: product.quantity,
          cost: product.quantity * mainProduct.price,
        };
      });
    },
    total() {
      return Object.keys(this.cartItems).reduce((acc, id) => {
        const product = products.find((p) => p.id === id);
        if (product) {
          return acc + product.price * this.cartItems[id].quantity;
        }
        return acc + 0;
      }, 0);
    },
    cartCount() {
      return Object.keys(this.cartItems).reduce((acc, id) => {
        return acc + this.cartItems[id].quantity;
      }, 0);
    },
    getTheme() {
      return this.theme;
    },
  },
  actions: {
    addToCart(productId) {
      if (this.cartItems.hasOwnProperty(productId)) {
        this.cartItems[productId] = {
          productId,
          quantity: this.cartItems[productId].quantity + 1,
        };
      } else {
        this.cartItems[productId] = {
          productId,
          quantity: 1,
        };
      }
    },
    removeFromCart(productId) {
      if (!this.cartItems[productId]) return;
      this.cartItems[productId].quantity -= 1;
      if (this.cartItems[productId].quantity === 0) {
        delete this.cartItems[productId];
      }
    },
    removeProduct(productId) {
      delete this.cartItems[productId];
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    },
    clearCart() {
      this.cartItems = {};
    },
  },
});
