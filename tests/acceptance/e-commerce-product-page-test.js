import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | e commerce product page', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('.navbar').exists();
    assert.dom('.navbar .logo').exists();
    assert.dom('.navbar ul').hasText('Collection Men Women About Contact');
  });
});
