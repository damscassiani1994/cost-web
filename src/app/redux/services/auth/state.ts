import { Auth } from '../../model/auth';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  auth: Auth;
  message: any;
  err: any;
}

export const initialAuthState: AuthState = {
  auth: null,
  message: '',
  err: null
};

export const authFeatureSelector = createFeatureSelector('authentication');
export const authSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.auth
);
