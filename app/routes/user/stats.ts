import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type StatsService from 'souls-tracker/services/stats';
import type UserService from 'souls-tracker/services/user';

export default class UserStatsRoute extends Route {
  @service declare user: UserService;
  @service declare stats: StatsService;

  async model(params: { gameid: string }) {
    // console.log(params);
    // use game id to get appid
    const steamid = this.user.userInfo?.steamid;
    const selectedGame = this.user.ownedGames?.find(
      (game) => game.id === params.gameid,
    );

    // Return null for games with support yet to be implemented
    switch (selectedGame?.appid.toString()) {
      case '570940':
        break;
      case '1245620':
        break;
      default:
        return null;
    }

    if (steamid && selectedGame) {
      const stats = await this.stats.fetchStats(steamid, selectedGame.appid);
      return stats;
    }
    return null;
  }
}
