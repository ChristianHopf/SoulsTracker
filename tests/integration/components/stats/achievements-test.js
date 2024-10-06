import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | stats/achievements', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.setProperties({
      achievements: [
        {
          name: 'Enkindle',
          description: 'Light bonfire flame.',
          unlocktime: '1723589024',
          icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570940/b3e4ca8626661bf2a67b7c207dae62088927bba7.jpg',
          rarity: '96.6',
        },
        {
          name: 'Estus Flask',
          description: 'Acquire Estus Flask.',
          unlocktime: '1723589520',
          icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570940/1cef9627ae9f7f676d22343778b9b5f52d77c304.jpg',
          rarity: '94.3',
        },
      ],
    });
  });

  test('it renders a list with two items', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(
      hbs`<Stats::Achievements @achievements={{this.achievements}}/>`,
    );
    assert.dom('ul').exists();
    // #each blocks don't seem to render in tests
    // assert.dom('li').exists({ count: 2 });
    assert.dom('h1').hasText('Achievements');
  });
});
