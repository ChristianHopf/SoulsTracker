import Component from '@glimmer/component';
import type { Achievement } from 'souls-tracker/services/stats';

interface ComponentArgs {
  achievement: Achievement;
}

export default class StatsAchievementItem extends Component<ComponentArgs> {
  get unlockTimeDateString(): string {
    // Still don't understand this error, but it works
    const unlocktime = parseInt(this.args.achievement.unlocktime);
    // console.log(unlocktime);
    const date = new Date(unlocktime * 1000).toLocaleDateString();
    return date;
  }
}
