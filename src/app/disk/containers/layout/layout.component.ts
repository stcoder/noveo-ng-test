import {Component, OnInit} from '@angular/core';
import {DiskApiService} from '../../services/disk-api.service';
import {ActivatedRoute} from '@angular/router';
import {Resource} from '../../models/resource';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public resource: Resource;

  constructor(
    private diskApi: DiskApiService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.url.pipe(
      map(segments => decodeURI(segments.join('/'))),
      switchMap((path: string) => {
        return this.diskApi.files(path ? path : '/');
      })
    ).subscribe(resource => this.resource = resource);
  }
}
