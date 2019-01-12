import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './containers/layout/layout.component';

const routes: Routes = [
  {path: '**', pathMatch: 'full', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiskRoutingModule {
}
