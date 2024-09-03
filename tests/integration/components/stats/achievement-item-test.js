import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stats/achievement-item', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.setProperties({
      achievement: {
        name: 'Enkindle',
        description: 'Light bonfire flame.',
        unlocktime: 'Tue Aug 13 2024',
        icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570940/b3e4ca8626661bf2a67b7c207dae62088927bba7.jpg',
      },
    });
  });

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(
      hbs`<Stats::AchievementItem @achievement={{this.achievement}}/>`,
    );

    assert
      .dom('img')
      .exists()
      .hasAttribute(
        'src',
        'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570940/b3e4ca8626661bf2a67b7c207dae62088927bba7.jpg',
      );
    assert.dom('h1').hasText('Enkindle');
    assert.dom('[data-test-description]').hasText('Light bonfire flame.');
    assert.dom('[data-test-date]').hasText('Achieved on: Tue Aug 13 2024');
  });
});
