import { Action } from '@ngrx/store';
import { Login } from '../model/login';

export enum LoginActionType {
  IsLogin = '[LOGIN] login successfully',
  IsSignOut = '[LOGIN] Sign Out successfully'
}

export class IsLogin implements Action {
  readonly type = LoginActionType.IsLogin;
  constructor(public payload: Login) {}
}

export class IsSignOut implements Action {
  readonly type = LoginActionType.IsSignOut;
  constructor(public payload: Login) {}
}

export type LoginActions = IsLogin | IsSignOut;
