import Component from '@glimmer/component';
import { service } from '@ember/service';
import StyleService from 'souls-tracker/services/style';
import { action } from '@ember/object';

export default class Header extends Component {
  @service declare style: StyleService;

  get darkMode() {
    return this.style.mode === 'dark';
  }

  @action
  changeMode() {
    this.style.toggleMode();
  }
}
