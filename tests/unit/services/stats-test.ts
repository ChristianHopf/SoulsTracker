import { module, test } from 'qunit';
import { setupTest } from 'souls-tracker/tests/helpers';

module('Unit | Service | stats', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:stats');
    assert.ok(service);
  });
});
