'use strict';

define("e-commerce-product-page/tests/acceptance/e-commerce-product-page-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | e commerce product page', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.strictEqual((0, _testHelpers.currentURL)(), '/');
      assert.dom('.navbar').exists();
      assert.dom('.navbar .logo').exists();
      assert.dom('.navbar ul').hasText('Collection Men Women About Contact');
    });
  });
});
// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import { hbs } from 'ember-cli-htmlbars';
// module('Integration | Component | container', function (hooks) {
//   setupRenderingTest(hooks);
//   test('it renders', async function (assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
//     await render(hbs`<Container />`);
//     assert.dom(this.element).hasText('');
//     // Template block usage:
//     await render(hbs`
//       <Container>
//         template block text
//       </Container>
//     `);
//     assert.dom(this.element).hasText('template block text');
//   });
// });
define("e-commerce-product-page/tests/integration/components/container-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
});
define("e-commerce-product-page/tests/integration/components/header/cart-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | header/cart', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Header::Cart />
      */
      {
        "id": "wyXb6GVo",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header/cart\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Header::Cart>
              template block text
            </Header::Cart>
          
      */
      {
        "id": "DQfDfFz7",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"header/cart\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("e-commerce-product-page/tests/integration/components/lightbox-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | lightbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Lightbox />
      */
      {
        "id": "ZeQdbuDr",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"lightbox\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Lightbox>
              template block text
            </Lightbox>
          
      */
      {
        "id": "4QUsMkFd",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"lightbox\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import { hbs } from 'ember-cli-htmlbars';
// module('Integration | Component | main-page', function (hooks) {
//   setupRenderingTest(hooks);
//   test('it renders', async function (assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
//     await render(hbs`<MainPage />`);
//     assert.dom(this.element).hasText('');
//     // Template block usage:
//     await render(hbs`
//       <MainPage>
//         template block text
//       </MainPage>
//     `);
//     assert.dom(this.element).hasText('template block text');
//   });
// });
define("e-commerce-product-page/tests/integration/components/main-page-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
});
// import { module, test } from 'qunit';
// import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import { hbs } from 'ember-cli-htmlbars';
// module('Integration | Component | nav-bar', function (hooks) {
//   setupRenderingTest(hooks);
//   test('it renders', async function (assert) {
//     // Set any properties with this.set('myProperty', 'value');
//     // Handle any actions with this.set('myAction', function(val) { ... });
//     await render(hbs`<NavBar />`);
//     assert.dom(this.element).hasText('');
//     // Template block usage:
//     await render(hbs`
//       <NavBar>
//         template block text
//       </NavBar>
//     `);
//     assert.dom(this.element).hasText('template block text');
//   });
// });
define("e-commerce-product-page/tests/integration/components/nav-bar-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
});
define("e-commerce-product-page/tests/integration/components/thumbnail-image-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | thumbnail-image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ThumbnailImage />
      */
      {
        "id": "dBZ+atp1",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"thumbnail-image\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ThumbnailImage>
              template block text
            </ThumbnailImage>
          
      */
      {
        "id": "PrCDXwp5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"thumbnail-image\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("e-commerce-product-page/tests/integration/components/thumbnail/image-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | thumbnail/image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Thumbnail::Image />
      */
      {
        "id": "R+Fkg9ZD",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"thumbnail/image\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Thumbnail::Image>
              template block text
            </Thumbnail::Image>
          
      */
      {
        "id": "ReFSNTyL",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"thumbnail/image\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("e-commerce-product-page/tests/test-helper", ["e-commerce-product-page/app", "e-commerce-product-page/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"e-commerce-product-page/app",0,"e-commerce-product-page/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("e-commerce-product-page/tests/unit/models/cart-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('cart', {});
      assert.ok(model);
    });
  });
});
define('e-commerce-product-page/config/environment', [], function() {
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

require('e-commerce-product-page/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
