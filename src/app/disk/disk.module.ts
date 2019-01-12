import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DiskRoutingModule} from './disk-routing.module';
import {LayoutComponent} from './containers/layout/layout.component';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FileSizePipe} from './pipes/file-size.pipe';
import {ResourceComponent} from './components/resource/resource.component';
import {ResourceItemComponent} from './containers/resource-item/resource-item.component';

@NgModule({
  declarations: [LayoutComponent, FileSizePipe, ResourceComponent, ResourceItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DiskRoutingModule,
    HttpClientModule
  ]
})
export class DiskModule {
}
