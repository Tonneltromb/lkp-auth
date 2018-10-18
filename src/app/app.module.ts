import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SystemModule} from './pages/system.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {AppCommonModule} from './common/app.common.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppCommonModule,
    SystemModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
