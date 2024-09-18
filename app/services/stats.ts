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
}

export default class StatsService extends Service {
  @tracked playtime: Playtime | null = null;
  @tracked bosses: Bosses | null = null;
  @tracked achievements: Achievement[] | null = null;

  async fetchStats(steamid: string, appid: string) {
    // Return null for unsupported games
    // switch (appid) {
    //   case '570940':
    //     break;
    //   case '1245620':
    //     break;
    //   default:
    //     return null;
    // }

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
      this.bosses = responseJson.data;
      return responseJson.data;
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
