import Component from '@glimmer/component';
// import type { Achievement } from 'souls-tracker/services/stats';

export default class StatsAchievementItem extends Component {
  get unlockTimeDateString(): string {
    // Still don't understand this error, but it works
    const unlocktime = parseInt(this.args.achievement.unlocktime);
    console.log(unlocktime);
    const date = new Date(unlocktime * 1000).toLocaleDateString();
    return date;
  }
}
