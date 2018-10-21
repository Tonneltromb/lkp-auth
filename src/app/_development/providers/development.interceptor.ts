import {Injectable, OnInit} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {DevInitService} from './dev-init.service';

@Injectable()
export class DevelopmentInterceptor implements HttpInterceptor {
  constructor(private initServ: DevInitService) {
    this.initServ.init();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'rest/say/hello') {
      // location.reload(true);
      return next.handle(req.clone({url: 'http://localhost:4200/assets/_development/testStub.json'}));
    }
    const proxyName = 'api/';
    let newReq: HttpRequest<any>;
    newReq = req.clone({url: `${proxyName}${req.url}`});
    return next.handle(newReq).do(
      s => {},
      err => {});
  }
}
