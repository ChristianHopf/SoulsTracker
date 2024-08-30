import EmberRouter from '@ember/routing/router';
import config from 'souls-tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('user', { path: '/:steamid' }, function () {
    this.route('stats', { path: '/:game' });
  });
});
