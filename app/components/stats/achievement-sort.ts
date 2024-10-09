import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { SortOption } from 'souls-tracker/services/stats';
import type StatsService from 'souls-tracker/services/stats';

export default class StatsAchievementSort extends Component {
  @service declare stats: StatsService;
  @tracked hidden: boolean = true;

  // Really don't like this, there should be an elegant solution with a radiogroup or something.
  // But Ember doesn't allow 'a === b' expressions in template conditionals
  get activeDateNewSort() {
    return this.stats.achievementSort === 'date-new';
  }
  get activeDateOldSort() {
    return this.stats.achievementSort === 'date-old';
  }
  get activeRarityMostSort() {
    return this.stats.achievementSort === 'rarity-most';
  }
  get activeRarityLeastSort() {
    return this.stats.achievementSort === 'rarity-least';
  }

  @action
  toggleSortDropdown() {
    this.hidden = !this.hidden;
  }

  @action
  sortAchievements(sort: SortOption) {
    this.hidden = true;
    this.stats.sortAchievements(sort);
  }
}
