import {Inject, Injectable, InjectionToken} from '@angular/core';
import get from 'lodash/get';
import has from 'lodash/has';

export const ENV = new InjectionToken('ENV');

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(@Inject(ENV) private environment) { }

  get(path, def = null): any {
    return get(this.environment, path, def);
  }

  has(path): boolean {
    return has(this.environment, path);
  }
}
