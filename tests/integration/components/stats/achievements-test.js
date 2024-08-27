import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stats/achievements', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Stats::Achievements />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Stats::Achievements>
        template block text
      </Stats::Achievements>
    `);

    assert.dom().hasText('template block text');
  });
});
