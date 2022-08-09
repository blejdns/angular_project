import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

export interface IUserData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address: {
    country: string | null,
    city: string | null
  };
  password: string;
}

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
  result: ILoginStatus | undefined;
  isUserLoggedIn: boolean = false;
  isUserRegister: boolean = false;
  loggedUser: IUserData | undefined;
  registerUsers: IUserData[] = [
    {id: 0, username: 'test', email: 'test@mail.com', firstName: 'Test first name', lastName: 'Test last name', address:{country: null, city: null}, password: 'test'},
    {id: 1, username: 'admin', email: 'admin@mail.com', firstName: 'Admin', lastName: 'Admin last name', address:{country: null, city: null}, password: 'admin'},
  ];

  login(userName: string, password: string): Observable <ILoginStatus> {
    
    let findUser = this.registerUsers?.find((obj) => {
      return obj.username === userName;
    });
    if (findUser) {
      if (password == findUser.password){
          this.isUserLoggedIn = true;
          window.localStorage.setItem('isUserLoggedIn', 'true');
          this.result = {success: true, error: null};
        } else {
          this.isUserLoggedIn = false;
          window.localStorage.setItem('isUserLoggedIn', 'false');
          this.result = {success: false, error: 'Incorrect password'}
        }
    } else {
      window.localStorage.setItem('isUserLoggedIn', 'false');
      this.result = {success: false, error:"User doesn't exists"}
    }
    return of(this.result).pipe(
      delay(1000)
    );
  }

  logout(): void {
    window.localStorage.removeItem('isUserLoggedIn');
    this.isUserLoggedIn = false;
  }

  register(user: IUserData): IRegisterStatus {
    let checkUser = this.registerUsers?.find((obj) => {
      return obj.username === user.username;
    })
    console.log(checkUser?.username);
    console.log(user.username);
    if (checkUser) {
      return {success: false, error:'User exist'};
    }
    this.registerUsers.push(user);

    return {success: true, error: null}
  }

  loginStatus(): boolean{
    let storedData = window.localStorage.getItem('isUserLoggedIn');
    if (storedData != null && storedData === 'true'){
      this.isUserLoggedIn = true;
      return this.isUserLoggedIn;
    }
    this.isUserLoggedIn = false;
    return this.isUserLoggedIn;
  }

  constructor() { }
}
