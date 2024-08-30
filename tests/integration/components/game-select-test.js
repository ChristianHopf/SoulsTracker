import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class MockUserService extends Service {
  ownedGames = [{ name: 'DARK SOULS™: REMASTERED', appid: '570940' }];
}

module('Integration | Component | game-select', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.owner.register('service:user', MockUserService);
  });

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GameSelect />`);

    assert.dom('span').containsText('Select Game');
  });
});
