import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export interface User {
  steamid: string; // 76561198099631791
  personaname: string; // xman720
  avatarmedium: string; // img url
}
export interface Game {
  id: string; // dark-souls-remastered
  name: string; // DARK SOULS™: REMASTERED
  appid: string; // 570940
}

export default class UserService extends Service {
  @tracked userInfo: User | null = null;
  // A simple tracked array is fine, since the individual items within the array don't need to be tracked
  @tracked ownedGames: Game[] | null = null;

  async fetchUserAndGames(steamid: string) {
    this.userInfo = null;
    this.ownedGames = null;

    await this.fetchUser(steamid);
    await this.fetchGames(steamid);
    console.log(this.ownedGames);
  }

  async fetchUser(steamid: string): Promise<User | null> {
    // Fetch user data
    try {
      const response = await fetch(
        `http://localhost:8080/api/user-profile/${steamid}`,
      );
      // Return error status and null if unsuccessful in fetching a user
      if (!response.ok) {
        console.error(`Error: status ${response.status}`);
        this.userInfo = null;
        return null;
      }
      // Success, return a User
      const data = await response.json();
      this.userInfo = data;
      return data;
    } catch (err) {
      // Some other error occurred while fetching or parsing data, set userInfo to null
      console.error('Failed to fetch user', err);
      this.userInfo = null;
      return null;
    }
  }

  async fetchGames(steamid: string): Promise<Game[] | null> {
    try {
      const response = await fetch(
        `http://localhost:8080/api/owned-games/${steamid}`,
      );
      // Return error status and null if unsuccessful in fetching the user's owned games
      if (!response.ok) {
        console.error(`Error: status ${response.status}`);
        this.ownedGames = null;
        return null;
      }

      const data = await response.json();
      console.log(data);

      // Success (the user owns at least one of the supported games)
      if (data.length > 0) {
        this.ownedGames = data;
        return data;
      }

      // If data is an empty array (the user owns none of the supported games), set ownedGames to null
      this.ownedGames = null;
      return null;
    } catch (err) {
      // Some other error occurred while fetching or parsing data, set ownedGames to null
      console.error('Failed to fetch owned games', err);
      this.ownedGames = null;
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
    user: UserService;
  }
}
