import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export interface Playtime {
  playtime_forever: string;
  playtime_2weeks: string;
}

export interface Bosses {
  next_boss: string;
  recent_boss: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocktime: string;
  icon: string;
  rarity: string;
}

export type SortOption =
  | 'date-new'
  | 'date-old'
  | 'rarity-most'
  | 'rarity-least';

export default class StatsService extends Service {
  @tracked playtime: Playtime | null = null;
  @tracked bosses: Bosses | null = null;
  @tracked achievements: Achievement[] | null = null;
  // Might not really need to hold this as a tracked property, only using it to perform
  // achievement sorting right now
  @tracked achievementSort: SortOption = 'date-new';

  async fetchStats(steamid: string, appid: string) {
    // UserStats route's model hook will call this on page load, so
    // setting them to null will be redundant. But I might want to be able to
    // call it again in the future (Refresh Stats button)
    this.playtime = null;
    this.bosses = null;
    this.achievements = null;

    await this.fetchPlaytime(steamid, appid);
    await this.fetchBosses(steamid, appid);
    await this.fetchAchievements(steamid, appid);
    // console.log(this.achievements);

    return {
      playtime: this.playtime,
      bosses: this.bosses,
      achievements: this.achievements,
    };
  }

  async fetchPlaytime(
    steamid: string,
    appid: string,
  ): Promise<Playtime | null> {
    try {
      const response = await fetch(
        `https://soulstracker-api-52g9f.ondigitalocean.app/api/playtime/${steamid}/${appid}`,
      );
      if (!response.ok) {
        console.error(`Error: status ${response.status}`);
        this.playtime = null;
        return null;
      }
      const responseJson = await response.json();
      console.log(responseJson);
      this.playtime = responseJson.data;
      return responseJson.data;
    } catch (err) {
      console.error('Failed to fetch playtime', err);
      return null;
    }
  }

  async fetchBosses(steamid: string, appid: string): Promise<Bosses | null> {
    try {
      const response = await fetch(
        `https://soulstracker-api-52g9f.ondigitalocean.app/api/bosses/${steamid}/${appid}`,
      );
      if (!response.ok) {
        console.error(`Error: status ${response.status}`);
        return null;
      }
      const responseJson = await response.json();
      console.log(responseJson);
      this.bosses = responseJson.data;
      return responseJson.response;
    } catch (err) {
      console.error('Failed to fetch bosses', err);
      return null;
    }
  }

  async fetchAchievements(
    steamid: string,
    appid: string,
  ): Promise<Achievement[] | null> {
    try {
      const response = await fetch(
        `https://soulstracker-api-52g9f.ondigitalocean.app/api/achievements/${steamid}/${appid}`,
      );
      if (!response.ok) {
        console.error(`Error: status ${response.status}`);
        return null;
      }
      const responseJson = await response.json();
      this.achievements = responseJson.data.result;
      return responseJson.data.result;
    } catch (err) {
      console.error('Failed to fetch bosses', err);
      return null;
    }
  }

  sortAchievements(sort: SortOption) {
    this.achievementSort = sort;
    // sort achievements
    if (this.achievements) {
      switch (sort) {
        case 'date-new':
          // sort: < 0 if a < b, 0 if a == b, > 0 if a > b
          this.achievements = this.achievements?.sort((a, b) => {
            return parseInt(b.unlocktime) - parseInt(a.unlocktime);
          });
          break;
        case 'date-old':
          this.achievements = this.achievements?.sort((a, b) => {
            return parseInt(a.unlocktime) - parseInt(b.unlocktime);
          });
          break;
        case 'rarity-most':
          this.achievements = this.achievements?.sort((a, b) => {
            return parseInt(a.rarity) - parseInt(b.rarity);
          });
          break;
        case 'rarity-least':
          this.achievements = this.achievements?.sort((a, b) => {
            return parseInt(b.rarity) - parseInt(a.rarity);
          });
          break;
        default:
          break;
      }
    }
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:stats')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('stats') declare altName: StatsService;`.
declare module '@ember/service' {
  interface Registry {
    stats: StatsService;
  }
}
