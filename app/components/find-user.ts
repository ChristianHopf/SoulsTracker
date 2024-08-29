import Component from '@glimmer/component';
import UserService from 'souls-tracker/services/user';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export interface FindUserSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class FindUser extends Component<FindUserSignature> {
  @service declare user: UserService;

  // Steamid input value
  @tracked steamid: string = '';

  @action
  fetchUserAndGames() {
    this.user.fetchUserAndGames(this.steamid);
  }
}
