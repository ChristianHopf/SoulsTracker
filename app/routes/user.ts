import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type UserService from 'souls-tracker/services/user';

export default class UserRoute extends Route {
  @service declare user: UserService;

  async model(params: { steamid: string }) {
    await this.user.fetchUserAndGames(params.steamid);
    console.log(this.user.userInfo);
    return this.user.userInfo;
  }
}
