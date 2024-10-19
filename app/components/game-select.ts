import Component from '@glimmer/component';
import UserService from 'souls-tracker/services/user';
import { service } from '@ember/service';
import { action } from '@ember/object';
import type Router from '@ember/routing/router';
import { tracked } from '@glimmer/tracking';

export interface GameSelectSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class GameSelect extends Component<GameSelectSignature> {
  @service declare user: UserService;
  @service declare router: Router;

  @tracked selectedGame = '';

  @action
  handleChangeGame(event: Event) {
    const target = event.target as HTMLSelectElement;
    // The "select" option shouldn't cause navigation
    this.selectedGame = target.value;
    console.log(target.value);
    // if (target.value != 'ignore') {
    //   this.router.transitionTo(
    //     'user.stats',
    //     this.user.userInfo?.steamid,
    //     target.value,
    //   );
    // }
  }

  @action
  handleGetGameStats() {
    console.log(this.selectedGame);
    this.router.transitionTo(
      'user.stats',
      this.user.userInfo?.steamid,
      this.selectedGame,
    );
  }
}
