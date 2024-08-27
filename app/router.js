import EmberRouter from '@ember/routing/router';
import config from 'souls-tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('darksouls', { path: '/dark-souls-remastered' });
  this.route('darksouls2', { path: '/dark-souls-2' });
  this.route('darksouls3', { path: '/dark-souls-3' });
  // this.route('bloodborne', { path: '/bloodborne' });
  this.route('eldenring', { path: '/elden-ring' });
});
