import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import type NativeArray from '@ember/array/-private/native-array';

export interface User {
  steamid: string; // 76561198099631791
  personaname: string; // xman720
  avatarmedium: string; // img url
}
export interface Game {
  name: string; // DARK SOULS: REMASTERED
  appid: string; // 570940
}

export default class UserService extends Service {
  @tracked userInfo: User | null = {
    steamid: '',
    personaname: '',
    avatarmedium: '',
  };

  // An A is a NativeArray, which is autotracked
  ownedGames: NativeArray<Game> | null = A([]);

  async fetchUserAndGames(steamid: string) {
    await this.fetchUser(steamid);
    await this.fetchGames(steamid);
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
      console.log(data);
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
        this.ownedGames = A(data);
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
