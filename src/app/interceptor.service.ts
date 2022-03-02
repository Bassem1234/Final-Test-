import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginService = this.injector.get(LoginService);
      let tokenizedReq = req.clone({
        setHeaders: {
        Authorization: `bearer ${loginService.getToken()}`
      }}); 
      return next.handle(tokenizedReq);
  }
}
