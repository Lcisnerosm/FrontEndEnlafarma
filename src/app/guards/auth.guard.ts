import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/services/login.service";
import { RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private login: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.login.UserValue;
    if (user) {
      if (route.data.roles && route.data.roles.indexOf(user.rol) === -1) {
        this.router.navigate(['/gira']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login'], {
      queryParams: {
        returnURL: state
      }
    });
    return false;
  }
}
