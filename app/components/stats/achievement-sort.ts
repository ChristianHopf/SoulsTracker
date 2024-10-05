import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class StatsAchievementSort extends Component {
  @tracked hidden: boolean = true;

  @action
  toggleSortDropdown() {
    this.hidden = !this.hidden;
    console.log(this.hidden);
  }
}
