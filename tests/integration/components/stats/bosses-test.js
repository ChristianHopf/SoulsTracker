import { module, test } from 'qunit';
import { setupRenderingTest } from 'souls-tracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class MockUserService extends Service {
  userInfo = {
    steamid: '76561198099631791',
    personaname: 'xman720',
    avatarmedium:
      'https://avatars.steamstatic.com/5af6623ce2a9d41363a12605d9d015febafa30ad_medium.jpg',
  };
}

module('Integration | Component | stats/bosses', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.owner.register('service:user', MockUserService);
    this.setProperties({
      stats: {
        playtime: {
          playtime_forever: 0,
          playtime_2weeks: 0,
        },
        bosses: {
          next_boss: 'Ornstein & Smough',
          recent_boss: 'Iron Golem',
        },
        achievements: [
          {
            name: 'Enkindle',
            description: 'Light bonfire flame.',
            unlocktime: 'Tue Aug 13 2024',
            icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570940/b3e4ca8626661bf2a67b7c207dae62088927bba7.jpg',
          },
          {
            name: 'Estus Flask',
            description: 'Acquire Estus Flask.',
            unlocktime: 'Tue Aug 13 2024',
            icon: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/570940/1cef9627ae9f7f676d22343778b9b5f52d77c304.jpg',
          },
        ],
      },
    });
  });

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Stats::Bosses @bosses={{this.stats.bosses}}/>`);

    assert.dom('h1').hasText('Bosses');

    assert.dom('[data-test-next-boss]').containsText('Next Boss:');
    assert.dom('[data-test-recent-boss]').containsText('Recent Boss:');
  });
});
