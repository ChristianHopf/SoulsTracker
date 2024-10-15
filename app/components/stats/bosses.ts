import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class StatsBosses extends Component {
  @tracked hidden: boolean = true;

  @action
  toggleShowPrevBosses() {
    this.hidden = !this.hidden;
  }
}
