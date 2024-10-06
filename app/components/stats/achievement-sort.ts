import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { SortOption } from 'souls-tracker/services/stats';
import type StatsService from 'souls-tracker/services/stats';

export default class StatsAchievementSort extends Component {
  @service declare stats: StatsService;
  @tracked hidden: boolean = true;

  @action
  toggleSortDropdown() {
    this.hidden = !this.hidden;
    console.log(this.hidden);
  }

  @action
  sortAchievements(sort: SortOption) {
    this.hidden = false;
    this.stats.sortAchievements(sort);
  }
}
