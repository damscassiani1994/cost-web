import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { AuthActionType, IsAuthenticated, ErrorAuth, IsDisconnected } from '../auth/action';
import { Observable, of, pipe } from 'rxjs';
import { mergeMap, exhaustMap, map, catchError, first, exhaust, concatMap, switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/userBean';
import { IsLogin, LoginActionType, IsSignOut } from '../loginPage/action';

@Injectable()
export class LoginEffects {

  constructor(private $actions: Actions, private $userServices: UserService) {}

  @Effect()
  public $loginEffect: Observable<IsAuthenticated | ErrorAuth> = createEffect(() =>
    this.$actions.pipe(
      ofType<IsLogin>(LoginActionType.IsLogin),
      switchMap(action => this.$userServices.login(action.payload.username, action.payload.password)
      .pipe(map(user => new IsAuthenticated({user: user.user, token: user.token, authenticated: true})),
      catchError(error => of(new ErrorAuth(error)))
      ))
    )
  );

  public $signOutEffect: Observable<IsDisconnected | ErrorAuth> = createEffect(() =>
    this.$actions.pipe(
      ofType<IsSignOut>(LoginActionType.IsSignOut),
      pipe(map(() => new IsDisconnected(null),
      catchError(error => of(new ErrorAuth(error)))))
    )
  );
}
