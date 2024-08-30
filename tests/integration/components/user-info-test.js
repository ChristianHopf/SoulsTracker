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

module('Integration | Component | user-info', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.owner.register('service:user', MockUserService);
  });

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UserInfo />`);

    assert
      .dom('img')
      .hasAttribute(
        'src',
        'https://avatars.steamstatic.com/5af6623ce2a9d41363a12605d9d015febafa30ad_medium.jpg',
      );
    assert.dom('h1').hasText('xman720');
    assert
      .dom('a')
      .hasAttribute(
        'href',
        'https://steamcommunity.com/profiles/76561198099631791',
      );
  });
});
