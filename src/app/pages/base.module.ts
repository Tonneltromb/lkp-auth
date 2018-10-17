import {NgModule} from '@angular/core';
import {BasePageComponent} from './base-page/base-page.component';
import {CommonModule} from '@angular/common';
import {BaseRoutingModule} from './base-routing.module';
import {LoginTabComponent} from './login-tab/login-tab.component';
import {RegistrationTabComponent} from './registration-tab/registration-tab.component';
import {StartPageComponent} from './start-page/start-page.component';
import {RegistrationPageComponent} from './registration-tab/registration-page/registration-page.component';
import {MessagePageComponent} from './message-page/message-page.component';

@NgModule({
  declarations: [
    BasePageComponent,
    StartPageComponent,
    LoginTabComponent,
    RegistrationTabComponent,
    RegistrationPageComponent,
    MessagePageComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule]
})

export class BaseModule {
}
