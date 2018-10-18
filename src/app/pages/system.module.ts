import {NgModule} from '@angular/core';
import {BasePageComponent} from './base-page/base-page.component';
import {CommonModule} from '@angular/common';
import {BaseRoutingModule} from './base-routing.module';
import {LoginTabComponent} from './tabs/login-tab/login-tab.component';
import {RegistrationTabComponent} from './tabs/registration-tab/registration-tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {MessagePageComponent} from './message-page/message-page.component';
import {AppCommonModule} from '../common/app.common.module';

@NgModule({
  declarations: [
    BasePageComponent,
    TabsComponent,
    LoginTabComponent,
    RegistrationTabComponent,
    RegistrationPageComponent,
    MessagePageComponent,
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    AppCommonModule
  ]
})

export class SystemModule {
}
