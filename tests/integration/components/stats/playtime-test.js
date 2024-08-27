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

    // Will later refactor tests to test proper behavior when fetching data
    assert.dom('h1').hasText('Playtime');
    assert.dom('[data-test-lifetime]').containsText('hours played (lifetime)');
    assert.dom('[data-test-2weeks]').containsText('hours played (last two weeks)');
  });
});
