import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { Observable, of } from 'rxjs';
import { AuthActionType, IsAuthenticated, ErrorAuth } from '../auth/action';
import { tap, catchError } from 'rxjs/operators';
import { data } from '../../util/contants';

@Injectable()
export class LoginSuccessEffects {
  constructor(private router: Router, private $actions: Actions) {}

  @Effect({dispatch: false})
  public $loginSuccess: Observable<any> = this.$actions.pipe(
    ofType<IsAuthenticated>(AuthActionType.IsAuthenticated),
    tap((auth) => {
      if (auth.payload.authenticated) {
        sessionStorage.setItem(data.userToken, auth.payload.token);
        sessionStorage.setItem(data.userObject, JSON.stringify(auth.payload.user));
      }
      this.router.navigate(['/']);
    }),
    catchError(error => of(new ErrorAuth(error)))
  );
}
