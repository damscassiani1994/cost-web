import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { data } from '../util/contants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: IUser;
  private token: string;

  constructor() { }

  getUserObject() {
    if (!this.user) {
      this.user = JSON.parse(sessionStorage.getItem(data.userObject));
    }
    return this.user;
  }

  getUserToken() {
    if (!this.token) {
      this.token = sessionStorage.getItem(data.userToken);
    }
  }
}
