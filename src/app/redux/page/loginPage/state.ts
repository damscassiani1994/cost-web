import { Login } from '../../model/login';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface LoginState {
  credentials: Login;
  message: string;
}

export const initialLoginState: LoginState = {
  credentials: null,
  message: ''
};

export const loginFeatureSelector = createFeatureSelector('credentials');
export const loginSelector = createSelector(
  loginFeatureSelector,
  (state: LoginState) =>  state.credentials
);
