import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class StyleService extends Service {
  @tracked mode: 'light' | 'dark' = 'dark';

  toggleMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    console.log(this.mode);
  }
}
