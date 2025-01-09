import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { findAll, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class MockUserService extends Service {
  ownedGames = [
    {
      name: 'DARK SOULS™: REMASTERED',
      id: 'dark-souls-remastered',
      appid: '570940',
    },
    {
      name: 'ELDEN RING',
      id: 'elden-ring',
      appid: '1245620',
    },
  ];
}

module('Integration | Component | game-select', function (hooks) {
  setupRenderingTest(hooks);

  // hooks.beforeEach(function () {
  //   this.owner.register('service:user', MockUserService);
  // });

  test('it renders disabled with 0 owned games', async function (assert) {
    await render(hbs`<GameSelect />`);
    let options = findAll('option');

    // Includes 'Select' option
    assert.ok(options.length, 1);

    // Get Stats button should be disabled
    assert.dom('button').hasAttribute('disabled');
  });

  test('it renders enabled with some owned games', async function (assert) {
    this.owner.register('service:user', MockUserService);
    await render(hbs`<GameSelect />`);
    let options = findAll('option');

    // Includes 'Select' option
    assert.ok(options.length, 3);

    // Get Stats button should not be disabled when a game option is selected
    await fillIn('[data-test-game-select]', 'dark-souls-remastered');
    assert.dom('button').doesNotHaveAttribute('disabled');
  });
});
