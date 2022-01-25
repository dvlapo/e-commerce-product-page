import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @tracked showNavbar = false;
  @tracked showCart = false;

  @action openNavbar() {
    this.showNavbar = true;
  }
  @action closeNavbar() {
    this.showNavbar = false;
  }
  @action toggleCart() {
    this.showCart = !this.showCart;
  }
}
