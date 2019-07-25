import { InfoUser } from '../model/infoUser';
import { Action } from '@ngrx/store';

export enum InfoUserActionType {
  AddInfo = '[infoUser] ADD InfoUser',
  LoadInfoUser = '[infoUser] GET InfoUser',
  UpdateInfoUser = '[infoUser] UPDATE InfoUser',
  DeleteInfoUser = '[infoUser] DELETE InfoUser',
  ErrorInfoUser = '[infoUSer] ERROR'
}

export class AddInfo implements Action {
  readonly type = InfoUserActionType.AddInfo;
  constructor(public payload: InfoUser) {}
}

export class LoadInfoUser implements Action {
  readonly type = InfoUserActionType.LoadInfoUser;
  constructor(public payload: InfoUser[]) {}
}

export class UpdateInfoUser implements Action {
  readonly type = InfoUserActionType.UpdateInfoUser;
  constructor(public payload: InfoUser) {}
}

export class DeleteInfoUser implements Action {
  readonly type = InfoUserActionType.DeleteInfoUser;
  constructor(public payload: any) {}
}

export class ErrorInfoUser implements Action {
  readonly type = InfoUserActionType.ErrorInfoUser;
  constructor(public payload: any) {}
}

export type InfoUserActions = AddInfo | LoadInfoUser | UpdateInfoUser | DeleteInfoUser | ErrorInfoUser;
