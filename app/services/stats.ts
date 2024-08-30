import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export interface Playtime {
  playtime_forever: number;
  playtime_2weeks: number;
}

export interface Bosses {
  next_boss: string;
  recent_boss: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocktime: number;
  icon: string;
}

export default class StatsService extends Service {
  @tracked playtime: Playtime | null = null;
  @tracked bosses: Bosses | null = null;
  @tracked achievements: Achievement[] | null = null;
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
