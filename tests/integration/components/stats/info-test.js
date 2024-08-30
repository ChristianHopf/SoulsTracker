import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stats/info', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Stats::Info />`);

    assert
      .dom('h1')
      .containsText("Enter a user's SteamID to find their profile.");
    assert
      .dom('h1')
      .containsText(
        "Then, select a game from the Games drop-down to view the user's stats.",
      );
  });
});
