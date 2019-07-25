import { Action } from '@ngrx/store';
import { Auth } from '../model/auth';

export enum AuthActionType {
  IsAuthenticated = '[Auth] User Authenticated',
  IsDisconnected = '[Auth] User IsDisconnected',
  ErrorAuth = '[Auth] ERROR'
}

export class IsAuthenticated implements Action {
  readonly type = AuthActionType.IsAuthenticated;
  constructor(public payload: Auth) {}
}

export class IsDisconnected implements Action {
  readonly type = AuthActionType.IsDisconnected;
  constructor(public payload: Auth) {}
}

export class ErrorAuth implements Action {
  readonly type = AuthActionType.ErrorAuth;
  constructor(public payload: any) {}
}

export type AuthActions = IsAuthenticated | IsDisconnected | ErrorAuth;
