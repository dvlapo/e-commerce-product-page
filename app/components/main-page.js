import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MainPageComponent extends Component {
  @tracked productNumber = 1;
  @tracked quantity = 0;
  @tracked showLightbox = false;
  @tracked quantityInCart = 0;
  @tracked price = 125;
  @tracked itemName = 'Fall Limited Edition Sneakers';

  productNumbers = [1, 2, 3, 4];

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

  @action switchProduct(num) {
    this.productNumber = num;
  }

  @action nextProduct() {
    if (this.productNumber === 4) {
      this.productNumber = 1;
    } else {
      this.productNumber++;
    }
  }

  @action prevProduct() {
    if (this.productNumber === 1) {
      this.productNumber = 4;
    } else {
      this.productNumber--;
    }
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
