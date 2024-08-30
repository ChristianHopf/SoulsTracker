import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class MockUserService extends Service {
  @tracked ownedGames = [{ name: 'DARK SOULS™: REMASTERED', appid: '570940' }];
}

module('Integration | Component | input-row', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.owner.register('service:user', MockUserService);
  });

  test('it renders the FindUser and GameSelect components', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<InputRow />`);

    assert.ok(find('[data-test-find-user]'));
    assert.ok(find('[data-test-game-select]'));
  });
});
