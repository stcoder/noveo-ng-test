import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/services/auth.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'disk', pathMatch: 'full'},
  {path: 'disk', loadChildren: './disk/disk.module#DiskModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
