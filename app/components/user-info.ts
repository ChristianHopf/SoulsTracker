import Component from '@glimmer/component';
import { service } from '@ember/service';
import type UserService from 'souls-tracker/services/user';

export default class UserInfo extends Component {
  @service declare user: UserService;
}
