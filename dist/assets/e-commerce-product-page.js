'use strict';



;define("e-commerce-product-page/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "e-commerce-product-page/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"e-commerce-product-page/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("e-commerce-product-page/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/components/lightbox", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='backdrop'>
    <div class='lightbox-container'>
      <ion-icon name='close-sharp' {{on 'click' @closeLightbox}}></ion-icon>
  
      <div class='lightbox-image'>
        <span class='prev' {{on 'click' this.prevProduct}}>
          <ion-icon name='chevron-back-outline'></ion-icon>
        </span>
        <img
          src='/assets/images/image-product-{{this.productNumber}}.jpg'
          alt=''
        />
        <span class='next' {{on 'click' this.nextProduct}}><ion-icon
            name='chevron-forward-outline'
          ></ion-icon></span>
      </div>
  
      <div class='thumbnail lightbox-thumbnail'>
        {{#each this.productNumbers as |productId|}}
          <div class='{{if (equal this.productNumber productId) "active"}}'>
            <img
              src='/assets/images/image-product-{{productId}}-thumbnail.jpg'
              alt=''
              {{on 'click' (fn this.switchProduct productId)}}
            />
          </div>
        {{/each}}
      </div>
    </div>
  </div>
  */
  {
    "id": "Sek+mcrI",
    "block": "[[[10,0],[14,0,\"backdrop\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"lightbox-container\"],[12],[1,\"\\n    \"],[11,\"ion-icon\"],[24,3,\"close-sharp\"],[4,[38,0],[\"click\",[30,1]],null],[12],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"lightbox-image\"],[12],[1,\"\\n      \"],[11,1],[24,0,\"prev\"],[4,[38,0],[\"click\",[30,0,[\"prevProduct\"]]],null],[12],[1,\"\\n        \"],[10,\"ion-icon\"],[14,3,\"chevron-back-outline\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"img\"],[15,\"src\",[29,[\"/assets/images/image-product-\",[30,0,[\"productNumber\"]],\".jpg\"]]],[14,\"alt\",\"\"],[12],[13],[1,\"\\n      \"],[11,1],[24,0,\"next\"],[4,[38,0],[\"click\",[30,0,[\"nextProduct\"]]],null],[12],[10,\"ion-icon\"],[14,3,\"chevron-forward-outline\"],[12],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"thumbnail lightbox-thumbnail\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"productNumbers\"]]],null]],null],null,[[[1,\"        \"],[10,0],[15,0,[29,[[52,[28,[37,4],[[30,0,[\"productNumber\"]],[30,2]],null],\"active\"]]]],[12],[1,\"\\n          \"],[11,\"img\"],[16,\"src\",[29,[\"/assets/images/image-product-\",[30,2],\"-thumbnail.jpg\"]]],[24,\"alt\",\"\"],[4,[38,0],[\"click\",[28,[37,5],[[30,0,[\"switchProduct\"]],[30,2]],null]],null],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[2]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@closeLightbox\",\"productId\"],false,[\"on\",\"each\",\"-track-array\",\"if\",\"equal\",\"fn\"]]",
    "moduleName": "e-commerce-product-page/components/lightbox.hbs",
    "isStrictMode": false
  });

  let LightboxComponent = (_class = class LightboxComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "productNumber", _descriptor, this);

      _initializerDefineProperty(this, "quantity", _descriptor2, this);

      _defineProperty(this, "productNumbers", [1, 2, 3, 4]);
    }

    switchProduct(num) {
      this.productNumber = num;
    }

    nextProduct() {
      if (this.productNumber === 4) {
        this.productNumber = 1;
      } else {
        this.productNumber++;
      }
    }

    prevProduct() {
      if (this.productNumber === 1) {
        this.productNumber = 4;
      } else {
        this.productNumber--;
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "productNumber", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 1;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "quantity", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "switchProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "switchProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "nextProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "nextProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "prevProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "prevProduct"), _class.prototype)), _class);
  _exports.default = LightboxComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, LightboxComponent);
});
;define("e-commerce-product-page/components/main-page", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <NavBar
    @quantity={{this.quantityInCart}}
    @itemName={{this.itemName}}
    @price={{this.price}}
    @total={{this.total}}
    @clearCart={{this.clearCart}}
  />
  
  <main class='main-container'>
    {{#if this.showLightbox}}
      <Lightbox
        @showLightbox={{this.showLightbox}}
        @closeLightbox={{this.closeLightbox}}
      />
    {{/if}}
    <section class='left'>
      <div class='large-image'>
        <span class='prev' {{on 'click' this.prevProduct}}>
          <ion-icon name='chevron-back-outline'></ion-icon>
        </span>
        <img
          src='./assets/images/image-product-{{this.productNumber}}.jpg'
          alt=''
          {{on 'click' this.openLightbox}}
        />
        <span class='next' {{on 'click' this.nextProduct}}><ion-icon
            name='chevron-forward-outline'
          ></ion-icon></span>
      </div>
  
      <div class='thumbnail'>
        {{#each this.productNumbers as |productId|}}
          <div class='{{if (equal this.productNumber productId) "active"}}'>
            <img
              src='/assets/images/image-product-{{productId}}-thumbnail.jpg'
              alt=''
              {{on 'click' (fn this.switchProduct productId)}}
            />
          </div>
        {{/each}}
      </div>
    </section>
  
    <section class='right'>
      <article>
        <h3>SNEAKER COMPANY</h3>
        <h1>{{this.itemName}}</h1>
        <p>These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the
          weather can offer.</p>
        <div class='flex'>
          <div class='price'>
            <h2>${{this.price}}.00</h2>
            <div class='discount'>
              <span>50%</span>
            </div>
          </div>
  
          <del class='old-price'>$250.00</del>
        </div>
  
      </article>
  
      <div class='add-to-cart'>
        <div class='quantity'>
          <span {{on 'click' this.decrementProductQuantity}}>
            <img src='/assets/images/icon-minus.svg' alt='' />
          </span>
          {{this.quantity}}
          <span {{on 'click' this.incrementProductQuantity}}><img
              src='/assets/images/icon-plus.svg'
              alt=''
            /></span>
        </div>
        <button type='button' {{on 'click' this.addToCart}}><ion-icon
            name='cart-outline'
          ></ion-icon>Add to cart</button>
      </div>
    </section>
  </main>
  */
  {
    "id": "Dws4KzoZ",
    "block": "[[[8,[39,0],null,[[\"@quantity\",\"@itemName\",\"@price\",\"@total\",\"@clearCart\"],[[30,0,[\"quantityInCart\"]],[30,0,[\"itemName\"]],[30,0,[\"price\"]],[30,0,[\"total\"]],[30,0,[\"clearCart\"]]]],null],[1,\"\\n\\n\"],[10,\"main\"],[14,0,\"main-container\"],[12],[1,\"\\n\"],[41,[30,0,[\"showLightbox\"]],[[[1,\"    \"],[8,[39,2],null,[[\"@showLightbox\",\"@closeLightbox\"],[[30,0,[\"showLightbox\"]],[30,0,[\"closeLightbox\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"  \"],[10,\"section\"],[14,0,\"left\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"large-image\"],[12],[1,\"\\n      \"],[11,1],[24,0,\"prev\"],[4,[38,3],[\"click\",[30,0,[\"prevProduct\"]]],null],[12],[1,\"\\n        \"],[10,\"ion-icon\"],[14,3,\"chevron-back-outline\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[11,\"img\"],[16,\"src\",[29,[\"./assets/images/image-product-\",[30,0,[\"productNumber\"]],\".jpg\"]]],[24,\"alt\",\"\"],[4,[38,3],[\"click\",[30,0,[\"openLightbox\"]]],null],[12],[13],[1,\"\\n      \"],[11,1],[24,0,\"next\"],[4,[38,3],[\"click\",[30,0,[\"nextProduct\"]]],null],[12],[10,\"ion-icon\"],[14,3,\"chevron-forward-outline\"],[12],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"thumbnail\"],[12],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[30,0,[\"productNumbers\"]]],null]],null],null,[[[1,\"        \"],[10,0],[15,0,[29,[[52,[28,[37,6],[[30,0,[\"productNumber\"]],[30,1]],null],\"active\"]]]],[12],[1,\"\\n          \"],[11,\"img\"],[16,\"src\",[29,[\"/assets/images/image-product-\",[30,1],\"-thumbnail.jpg\"]]],[24,\"alt\",\"\"],[4,[38,3],[\"click\",[28,[37,7],[[30,0,[\"switchProduct\"]],[30,1]],null]],null],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"section\"],[14,0,\"right\"],[12],[1,\"\\n    \"],[10,\"article\"],[12],[1,\"\\n      \"],[10,\"h3\"],[12],[1,\"SNEAKER COMPANY\"],[13],[1,\"\\n      \"],[10,\"h1\"],[12],[1,[30,0,[\"itemName\"]]],[13],[1,\"\\n      \"],[10,2],[12],[1,\"These low-profile sneakers are your perfect casual wear companion.\\n        Featuring a durable rubber outer sole, they’ll withstand everything the\\n        weather can offer.\"],[13],[1,\"\\n      \"],[10,0],[14,0,\"flex\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"price\"],[12],[1,\"\\n          \"],[10,\"h2\"],[12],[1,\"$\"],[1,[30,0,[\"price\"]]],[1,\".00\"],[13],[1,\"\\n          \"],[10,0],[14,0,\"discount\"],[12],[1,\"\\n            \"],[10,1],[12],[1,\"50%\"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,\"del\"],[14,0,\"old-price\"],[12],[1,\"$250.00\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"add-to-cart\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"quantity\"],[12],[1,\"\\n        \"],[11,1],[4,[38,3],[\"click\",[30,0,[\"decrementProductQuantity\"]]],null],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"/assets/images/icon-minus.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[1,[30,0,[\"quantity\"]]],[1,\"\\n        \"],[11,1],[4,[38,3],[\"click\",[30,0,[\"incrementProductQuantity\"]]],null],[12],[10,\"img\"],[14,\"src\",\"/assets/images/icon-plus.svg\"],[14,\"alt\",\"\"],[12],[13],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[11,\"button\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"addToCart\"]]],null],[12],[10,\"ion-icon\"],[14,3,\"cart-outline\"],[12],[13],[1,\"Add to cart\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"productId\"],false,[\"nav-bar\",\"if\",\"lightbox\",\"on\",\"each\",\"-track-array\",\"equal\",\"fn\"]]",
    "moduleName": "e-commerce-product-page/components/main-page.hbs",
    "isStrictMode": false
  });

  let MainPageComponent = (_class = class MainPageComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "productNumber", _descriptor, this);

      _initializerDefineProperty(this, "quantity", _descriptor2, this);

      _initializerDefineProperty(this, "showLightbox", _descriptor3, this);

      _initializerDefineProperty(this, "quantityInCart", _descriptor4, this);

      _initializerDefineProperty(this, "price", _descriptor5, this);

      _initializerDefineProperty(this, "itemName", _descriptor6, this);

      _defineProperty(this, "productNumbers", ['1', '2', '3', '4']);
    }

    get total() {
      return this.price * this.quantity;
    }

    addToCart() {
      this.quantityInCart = this.quantity;
    }

    clearCart() {
      this.quantityInCart = 0;
    }

    openLightbox() {
      this.showLightbox = true;
    }

    closeLightbox() {
      this.showLightbox = false;
    }

    switchProduct(num) {
      this.productNumber = num;
    }

    nextProduct() {
      if (this.productNumber == 4) {
        this.productNumber = 1;
      } else {
        this.productNumber++;
      }
    }

    prevProduct() {
      if (this.productNumber == 1) {
        this.productNumber = 4;
      } else {
        this.productNumber--;
      }
    }

    incrementProductQuantity() {
      this.quantity = this.quantity + 1;
    }

    decrementProductQuantity() {
      if (this.quantity === 0) {
        this.quantity = 0;
      } else {
        this.quantity = this.quantity - 1;
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "productNumber", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '1';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "quantity", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "showLightbox", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "quantityInCart", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "price", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 125;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "itemName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'Fall Limited Edition Sneakers';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "addToCart", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addToCart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearCart", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearCart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openLightbox", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openLightbox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeLightbox", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "closeLightbox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "switchProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "switchProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "nextProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "nextProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "prevProduct", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "prevProduct"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "incrementProductQuantity", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "incrementProductQuantity"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "decrementProductQuantity", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "decrementProductQuantity"), _class.prototype)), _class);
  _exports.default = MainPageComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MainPageComponent);
});
;define("e-commerce-product-page/components/nav-bar", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav>
    <div class='navbar'>
      <div class='hamburger' {{on 'click' this.openNavbar}}><img
          src='/assets/images/icon-menu.svg'
          alt=''
        /></div>
      <div class='logo'>
        <img src='/assets/images/logo.svg' alt='' />
      </div>
  
      <ul class='desktop-nav'>
        <li>Collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
  
      {{#if this.showNavbar}}
        <ul>
          <li class='close'><ion-icon
              name='close-sharp'
              {{on 'click' this.closeNavbar}}
            ></ion-icon></li>
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      {{/if}}
  
      <div class='cart-avatar'>
        <div class='cart-icon' {{on 'click' this.toggleCart}}>
          <ion-icon name='cart-outline'></ion-icon>
          {{#if @quantity}}
            <div class='basket'>{{@quantity}}</div>
          {{/if}}
        </div>
        <img src='/assets/images/image-avatar.png' alt='' />
      </div>
      {{#if this.showCart}}
        <div class='cart'>
          <h1>Cart</h1>
          {{#if @quantity}}
            <div class='cart-details'>
              <div>
                <img src='/assets/images/image-product-1-thumbnail.jpg' alt='' />
                <div>
                  <h2>{{@itemName}}</h2>
                  <h3>${{@price}}.00 x
                    {{@quantity}}
                    <span>${{@total}}.00</span>
                  </h3>
                </div>
                <img
                  src='/assets/images/icon-delete.svg'
                  alt=''
                  class='delete'
                  {{on 'click' @clearCart}}
                />
              </div>
              <button class='checkout'>
                Checkout
              </button>
            </div>
          {{else}}
            <div class='empty-cart'>
              <p>Your cart is empty.</p>
            </div>
          {{/if}}
        </div>
      {{/if}}
    </div>
  </nav>
  */
  {
    "id": "bx9Idvzp",
    "block": "[[[10,\"nav\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"navbar\"],[12],[1,\"\\n    \"],[11,0],[24,0,\"hamburger\"],[4,[38,0],[\"click\",[30,0,[\"openNavbar\"]]],null],[12],[10,\"img\"],[14,\"src\",\"/assets/images/icon-menu.svg\"],[14,\"alt\",\"\"],[12],[13],[13],[1,\"\\n    \"],[10,0],[14,0,\"logo\"],[12],[1,\"\\n      \"],[10,\"img\"],[14,\"src\",\"/assets/images/logo.svg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,\"ul\"],[14,0,\"desktop-nav\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"Collection\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"Men\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"Women\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"About\"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"Contact\"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showNavbar\"]],[[[1,\"      \"],[10,\"ul\"],[12],[1,\"\\n        \"],[10,\"li\"],[14,0,\"close\"],[12],[11,\"ion-icon\"],[24,3,\"close-sharp\"],[4,[38,0],[\"click\",[30,0,[\"closeNavbar\"]]],null],[12],[13],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"Collection\"],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"Men\"],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"Women\"],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"About\"],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"Contact\"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n    \"],[10,0],[14,0,\"cart-avatar\"],[12],[1,\"\\n      \"],[11,0],[24,0,\"cart-icon\"],[4,[38,0],[\"click\",[30,0,[\"toggleCart\"]]],null],[12],[1,\"\\n        \"],[10,\"ion-icon\"],[14,3,\"cart-outline\"],[12],[13],[1,\"\\n\"],[41,[30,1],[[[1,\"          \"],[10,0],[14,0,\"basket\"],[12],[1,[30,1]],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,\"img\"],[14,\"src\",\"/assets/images/image-avatar.png\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[41,[30,0,[\"showCart\"]],[[[1,\"      \"],[10,0],[14,0,\"cart\"],[12],[1,\"\\n        \"],[10,\"h1\"],[12],[1,\"Cart\"],[13],[1,\"\\n\"],[41,[30,1],[[[1,\"          \"],[10,0],[14,0,\"cart-details\"],[12],[1,\"\\n            \"],[10,0],[12],[1,\"\\n              \"],[10,\"img\"],[14,\"src\",\"/assets/images/image-product-1-thumbnail.jpg\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n              \"],[10,0],[12],[1,\"\\n                \"],[10,\"h2\"],[12],[1,[30,2]],[13],[1,\"\\n                \"],[10,\"h3\"],[12],[1,\"$\"],[1,[30,3]],[1,\".00 x\\n                  \"],[1,[30,1]],[1,\"\\n                  \"],[10,1],[12],[1,\"$\"],[1,[30,4]],[1,\".00\"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[11,\"img\"],[24,\"src\",\"/assets/images/icon-delete.svg\"],[24,\"alt\",\"\"],[24,0,\"delete\"],[4,[38,0],[\"click\",[30,5]],null],[12],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"button\"],[14,0,\"checkout\"],[12],[1,\"\\n              Checkout\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[10,0],[14,0,\"empty-cart\"],[12],[1,\"\\n            \"],[10,2],[12],[1,\"Your cart is empty.\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]]],[1,\"      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\"],[13]],[\"@quantity\",\"@itemName\",\"@price\",\"@total\",\"@clearCart\"],false,[\"on\",\"if\"]]",
    "moduleName": "e-commerce-product-page/components/nav-bar.hbs",
    "isStrictMode": false
  });

  let NavBarComponent = (_class = class NavBarComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "showNavbar", _descriptor, this);

      _initializerDefineProperty(this, "showCart", _descriptor2, this);
    }

    openNavbar() {
      this.showNavbar = true;
    }

    closeNavbar() {
      this.showNavbar = false;
    }

    toggleCart() {
      this.showCart = !this.showCart;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "showNavbar", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "showCart", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "openNavbar", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openNavbar"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeNavbar", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "closeNavbar"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleCart", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleCart"), _class.prototype)), _class);
  _exports.default = NavBarComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, NavBarComponent);
});
;define("e-commerce-product-page/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/app-version", ["exports", "@ember/component/helper", "e-commerce-product-page/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"e-commerce-product-page/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("e-commerce-product-page/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/equal"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/equal", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f

  function equal(args) {
    let [prop1, prop2] = args;
    return prop1 === prop2;
  }

  var _default = (0, _helper.helper)(equal);

  _exports.default = _default;
});
;define("e-commerce-product-page/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-equal"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("e-commerce-product-page/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("e-commerce-product-page/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("e-commerce-product-page/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "e-commerce-product-page/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"e-commerce-product-page/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("e-commerce-product-page/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("e-commerce-product-page/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("e-commerce-product-page/initializers/export-application-global", ["exports", "ember", "e-commerce-product-page/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"e-commerce-product-page/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("e-commerce-product-page/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("e-commerce-product-page/router", ["exports", "@ember/routing/router", "e-commerce-product-page/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"e-commerce-product-page/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("e-commerce-product-page/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "5qeJv1xa",
    "block": "[[[1,[28,[35,0],[\"Frontend Mentor | E-commerce product page\"],null]],[1,\"\\n\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[8,[39,1],null,null,null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"main-page\",\"component\",\"-outlet\"]]",
    "moduleName": "e-commerce-product-page/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("e-commerce-product-page/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("e-commerce-product-page/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('e-commerce-product-page/config/environment', [], function() {
  var prefix = 'e-commerce-product-page';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("e-commerce-product-page/app")["default"].create({"name":"e-commerce-product-page","version":"0.0.0+fc6348bf"});
          }
        
//# sourceMappingURL=e-commerce-product-page.map
