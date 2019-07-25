import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { RootState } from './state';
import { infoUserReducer } from '../infoUser/reducer';
import { authReducer, clearState } from '../auth/reducer';
import { loginReducer } from '../loginPage/reducer';

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  infoUser: infoUserReducer,
  auth: authReducer,
  login: loginReducer
};

export const metaReducers: MetaReducer<any>[] =  [];
