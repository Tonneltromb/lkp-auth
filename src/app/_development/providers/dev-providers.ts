import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DevelopmentInterceptor} from './development.interceptor';
import {DevInitService} from './dev-init.service';

export const DEV_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: DevelopmentInterceptor,
    multi: true
  },
  DevInitService
];
