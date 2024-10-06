import { service } from '@ember/service';
import Component from '@glimmer/component';
import type StatsService from 'souls-tracker/services/stats';

export default class StatsAchievements extends Component {
  @service declare stats: StatsService;

  get sortedAchievements() {
    return this.stats.achievements;
  }
}
