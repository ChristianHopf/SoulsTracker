import Route from '@ember/routing/route';

export default class UserStatsRoute extends Route {
  async model(params: { game: string }) {
    console.log(params.game);
    return params.game;
  }
}
