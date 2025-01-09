import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | find-user', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with the Find User button disabled until given input', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FindUser />`);

    assert.dom('span').containsText('SteamID');
    assert.dom('button').exists();
    assert.dom('button').hasText('Find User');

    assert.dom('button').hasAttribute('disabled');
    await fillIn('input', '12345');
    assert.dom('button').doesNotHaveAttribute('disabled');
  });
});
