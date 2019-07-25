import { InfoUser } from '../model/infoUser';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface InfoUserState {
  infoUsers: InfoUser[];
  message: string;
}

export const initialInfoUserState: InfoUserState = {
  infoUsers: [],
  message: ''
};

export const infoUserFeatureSelector = createFeatureSelector('infoUsers');
export const infoUserSelector = createSelector(
  infoUserFeatureSelector,
  (state: InfoUserState) => state.infoUsers
);

