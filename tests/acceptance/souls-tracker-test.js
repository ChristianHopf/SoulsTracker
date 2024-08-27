import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'souls-tracker/tests/helpers';

module('Acceptance | souls tracker', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /souls-tracker', async function (assert) {
    await visit('/souls-tracker');

    assert.strictEqual(currentURL(), '/souls-tracker');
  });
});
