import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  // SteamID (ex. 76561198099631791)
  @attr('string')
  declare steamid: string;

  // Steam username (ex. xman720)
  @attr('string')
  declare personaname: string;

  // URL for avatar img
  @attr('string')
  declare avatarmedium: string;
}
