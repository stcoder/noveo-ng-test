import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {environment} from '../environments/environment';
import {ConfigService, ENV} from './services/config.service';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    {provide: ENV, useValue: environment},
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
