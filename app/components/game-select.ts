import Component from '@glimmer/component';
import UserService from 'souls-tracker/services/user';
import { service } from '@ember/service';
import { TrackedArray } from 'tracked-built-ins';
import NativeArray, { A } from '@ember/array';

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
}
