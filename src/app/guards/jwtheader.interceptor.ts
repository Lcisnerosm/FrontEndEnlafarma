import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";
import { environment } from '../../environments/environment';

@Injectable()
export class JwtHeader implements HttpInterceptor {
  constructor(private login: LoginService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
      const user = this.login.UserValue;
      const isLogin = user && user.token;
      const urlApi = request.url.startsWith(environment.url);
      if (isLogin && urlApi) {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
      }
      return next.handle(request);
  }
}
