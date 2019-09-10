import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RootState } from '../redux/root/state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        if (!req.url.endsWith('user/singIn')) {
          sessionStorage.clear();
          this.router.navigate(['login']);
        }
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }

}
