import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with heading and default dark mode', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Header />`);

    assert.dom().containsText('SoulsTracker');

    assert.dom('button').exists();
    assert.dom('button').hasText('Dark');

    await click('button');
    assert.dom('button').hasText('Light');

    await click('button');
    assert.dom('button').hasText('Dark');
  });

  test('it toggles the toggle button text between Dark and Light', async function (assert) {
    await render(hbs`<Header />`);

    await click('button');
    assert.dom('button').hasText('Light');

    await click('button');
    assert.dom('button').hasText('Dark');
  });
});
