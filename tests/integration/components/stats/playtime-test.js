import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stats/playtime', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Stats::Playtime />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Stats::Playtime>
        template block text
      </Stats::Playtime>
    `);

    assert.dom().hasText('template block text');
  });
});
