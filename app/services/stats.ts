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

  async fetchPlaytime(
    steamid: string,
    appid: string,
  ): Promise<Playtime | null> {
    try {
      const response = await fetch(
        `http://localhost:8080/api/playtime/${steamid}/${appid}`,
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
