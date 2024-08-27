import Component from '@glimmer/component';
import { service } from '@ember/service';
import StyleService from 'souls-tracker/services/style';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Header extends Component {
  @service declare style: StyleService;

  @action
  changeMode() {
    this.style.toggleMode();
  }
}
