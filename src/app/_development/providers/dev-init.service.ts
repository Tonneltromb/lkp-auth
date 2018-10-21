import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {DevMenuComponent} from '../components/menu/menu.component';

@Injectable()
export class DevInitService {
  constructor(private cfResolver: ComponentFactoryResolver,
              private injector: Injector,
              private app: ApplicationRef) {

  }

  init() {
    const component = this.cfResolver.resolveComponentFactory(DevMenuComponent).create(this.injector);
    this.app.attachView(component.hostView);
    document.body.appendChild((component.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement);
  }
}
