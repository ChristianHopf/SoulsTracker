import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type StatsService from 'souls-tracker/services/stats';

export default class UserStatsRoute extends Route {
  @service declare stats: StatsService;

  async model(params: { game: string }) {
    console.log(params.game);
    return params.game;
  }
}
