import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MainPageComponent extends Component {
  @tracked product = '/assets/images/image-product-1';
  @tracked quantity = 0;
  @tracked showLightbox = false;
  @tracked quantityInCart = 0;
  @tracked price = 125;
  @tracked itemName = 'Fall Limited Edition Sneakers';

  products = [
    '/assets/images/image-product-1',
    '/assets/images/image-product-2',
    '/assets/images/image-product-3',
    '/assets/images/image-product-4',
  ];

  get total() {
    return this.price * this.quantity;
  }

  @action addToCart() {
    this.quantityInCart = this.quantity;
  }

  @action clearCart() {
    this.quantityInCart = 0;
  }

  @action openLightbox() {
    this.showLightbox = true;
  }

  @action closeLightbox() {
    this.showLightbox = false;
  }

  @action switchProduct(selectedProduct) {
    this.product = selectedProduct;
  }

  @action nextProduct() {
    let num = this.product;
    console.log(num);
  }

  @action prevProduct() {
    // if (this.productNumber == 1) {
    //   this.productNumber = 4;
    // } else {
    //   this.productNumber--;
    // }
  }

  @action incrementProductQuantity() {
    this.quantity = this.quantity + 1;
  }
  @action decrementProductQuantity() {
    if (this.quantity === 0) {
      this.quantity = 0;
    } else {
      this.quantity = this.quantity - 1;
    }
  }
}
