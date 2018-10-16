import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasePageComponent} from './base-page/base-page.component';
import {LoginTabComponent} from './login-tab/login-tab.component';
import {RegistrationTabComponent} from './registration-tab/registration-tab.component';
import {StartPageComponent} from './start-page/start-page.component';
import {RegistrationPageComponent} from './registration-tab/registration-page/registration-page.component';

const startPageRoutes: Routes = [
  { path: 'loginTab', component: LoginTabComponent },
  { path: 'registrationTab', component: RegistrationTabComponent }
];


const routes: Routes = [{
  path: '', component: BasePageComponent,
  children: [
    { path: 'start-page', component: StartPageComponent, children: startPageRoutes },
    { path: 'login', component: RegistrationPageComponent },
    { path: 'registration', component: RegistrationPageComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BaseRoutingModule {}
