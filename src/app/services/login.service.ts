import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Claims } from "../models/claims.models";
import { User } from "../models/user.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private UserSubject: BehaviorSubject<Claims>; //Sirve para acceder al LocalStorage
  public User: Observable<Claims>;
  options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  constructor(private http: HttpClient) {
    this.UserSubject = new BehaviorSubject<Claims>(
      JSON.parse(localStorage.getItem("claims"))
    );
    this.User = this.UserSubject.asObservable();
  }

  public get UserValue(): Claims {
    return this.UserSubject.value;
  }

  login(user: User) {
    return this.http
      .post(`http://localhost:4002/login`, JSON.stringify(user), this.options)
      .pipe(
        map((resp) => {
          console.log(resp);
          let user = {
            token: resp["data"].token,
            rol: resp["data"].rol,
            name: resp["data"].email,
          };
          if (user && user.token) {
            localStorage.setItem("claims", JSON.stringify(user));
            this.UserSubject.next(user);
          }
          return user;
        })
      );

  }

  logout() {
    localStorage.removeItem("claims");
    this.UserSubject.next(null);
  }
}
