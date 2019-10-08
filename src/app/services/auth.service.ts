import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { data } from '../util/contants';
import { Store } from '@ngrx/store';
import { RootState } from '../redux/root/state';
import { IsAuthenticated } from '../redux/services/auth/action';
import { Observable, from, of, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: IUser;
  private token: string;

  constructor(private store: Store<RootState>) { }

  getUserObject() {
    if (!this.user) {
      this.user = JSON.parse(sessionStorage.getItem(data.userObject));
      if (this.user) {
        this.store.dispatch(new IsAuthenticated({authenticated: true, user: this.user, token: this.getUserToken()}));
      }
    }
    return this.user;
  }

  getUserToken() {
    if (!this.token) {
      this.token = sessionStorage.getItem(data.userToken);
    }
    return this.token;
  }
}
