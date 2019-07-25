import { Injectable } from '@angular/core';
import { data } from '../util/contants';
import { Observable } from 'rxjs';
import { User } from '../models/userBean';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = data.apiUser;
  }

  login(username, password): Observable<User> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    const body = JSON.stringify({username, password});
    return this.http.post<User>(this.url + '/singIn', body, {headers});
  }
}
