import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stats/bosses', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Stats::Bosses @bosses="bosses"/>`);

    assert.dom('h1').hasText('Bosses');

    assert.dom('[data-test-next-boss]').containsText('Next Boss:');
    assert.dom('[data-test-recent-boss]').containsText('Recent Boss:');
  });
});
