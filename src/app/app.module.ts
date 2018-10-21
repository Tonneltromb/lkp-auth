import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SystemModule} from './pages/system.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {AppCommonModule} from './common/app.common.module';
import {environment} from '../environments/environment';
import {DEV_PROVIDERS} from './_development/providers/dev-providers';
import {DevelopmentModule} from './_development/_dev.module';


const additionalProviders = [];
const additionalModules = [];


if (!environment.production) {
  // additionalProviders.push(...DEV_PROVIDERS);
  additionalModules.push(DevelopmentModule);
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ...additionalModules,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppCommonModule,
    SystemModule
  ],
  providers: [
    ...additionalProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
