import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor() {
    this.initLogin();
  }

  initLogin(): void {
    if(this.checkToken()) {
      this.loggedIn = true;
    }
  }

  login(): void {
    this.loggedIn = true;
    this.storeToken();
  }

  logout(): void {
    this.loggedIn = false;
    this.removeToken();
  }

  storeToken(): void {
    localStorage.setItem('token', '1234azerty');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  checkToken(): boolean {
    if(localStorage.getItem('token')) {
      // check token validity...
      return true;
    } else {
      return false;
    }
  }
}
