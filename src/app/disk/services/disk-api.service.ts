import {Injectable} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resource} from '../models/resource';

@Injectable({
  providedIn: 'root'
})
export class DiskApiService {
  private resourceUrl: URL;

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.resourceUrl = new URL(`${this.configService.get('yandex_api.disk.url')}/resources`);
    this.resourceUrl.searchParams.set('fields', [
      'name',
      'type',
      'path',
      'size',
      '_embedded.items.name',
      '_embedded.items.type',
      '_embedded.items.path',
      '_embedded.items.size'
    ].join(','));
  }

  files(path: string = '/'): Observable<any> {
    this.resourceUrl.searchParams.set('path', path);
    return this.http.get<Resource>(this.resourceUrl.href);
  }
}
