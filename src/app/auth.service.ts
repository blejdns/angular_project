import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { IUserData } from './user/register/register.component';

export interface IRegisterStatus {
  success: boolean;
  error: string | null;
}

export interface ILoginStatus {
  success: boolean;
  error: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  isUserRegister: boolean = false;

  login(userName: string, password: string): ILoginStatus {
    let registeredUser: IUserData | any = JSON.parse(localStorage.getItem('User')!);
    if (registeredUser) {
      console.log(registeredUser.username);
      if (userName == registeredUser.username && password == registeredUser.password){
          this.isUserLoggedIn = true;
          localStorage.setItem('isUserLoggedIn', 'true');
        } else {
          this.isUserLoggedIn = false;
          localStorage.setItem('isUserLoggedIn', 'false');
          return {success: false, error: 'Incorrect username or password'}
        }
    } else {
      return {success: false, error:'No registered users'}
    }
    return {success: true, error: null}
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  register(user: IUserData): IRegisterStatus {
    let checkUser = JSON.parse(localStorage.getItem('User')!);
    if (checkUser) {
      return {success: false, error:'User exist'};
    }

    localStorage.setItem('User', JSON.stringify(user));

    return {success: true, error: null}
  }

  constructor() { }
}
