import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LightboxComponent extends Component {
  @tracked productNumber = 1;
  @tracked quantity = 0;

  productNumbers = [1, 2, 3, 4];

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
}
