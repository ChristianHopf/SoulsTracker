import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tip-steamid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TipSteamid />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TipSteamid>
        template block text
      </TipSteamid>
    `);

    assert.dom().hasText('template block text');
  });
});
