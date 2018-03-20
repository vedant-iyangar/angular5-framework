import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class HeaderService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const customReq = request.clone({
      headers: request.headers.set('Dummy-Header', 'dummy-header')
    });

    return next.handle(customReq)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
        }
      });
  }
}
