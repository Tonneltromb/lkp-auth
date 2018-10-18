import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasePageComponent} from './base-page/base-page.component';
import {LoginTabComponent} from './tabs/login-tab/login-tab.component';
import {RegistrationTabComponent} from './tabs/registration-tab/registration-tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';

const tabsPageRoutes: Routes = [
  { path: 'loginTab', component: LoginTabComponent },
  { path: 'registrationTab', component: RegistrationTabComponent }
];


const routes: Routes = [{
  path: '', component: BasePageComponent,
  children: [
    { path: 'tabs', component: TabsComponent, children: tabsPageRoutes },
    { path: 'login', component: RegistrationPageComponent },
    { path: 'registration', component: RegistrationPageComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BaseRoutingModule {}
