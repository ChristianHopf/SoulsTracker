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
    const selectedGame = this.user.ownedGames?.find(
      (game) => game.id === params.gameid,
    );
    const steamid = this.user.userInfo?.steamid;

    if (steamid && selectedGame) {
      const stats = this.stats.fetchStats(steamid, selectedGame.appid);
      return stats;
      // const playtime = await this.stats.fetchPlaytime(
      //   steamid,
      //   selectedGame?.appid,
      // );
      // console.log(playtime);
      // return playtime;
    }
    return null;
  }
}
