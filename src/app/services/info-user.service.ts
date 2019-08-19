import { Injectable } from '@angular/core';
import { data } from '../util/contants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {
  private apiURl = data.apiCost;

  constructor(private http: HttpClient) { }
  getInfos(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json')
                                     .set('authorization', token);
    return this.http.get(this.apiURl + '/info-user/get-infos', {headers});
  }
}
