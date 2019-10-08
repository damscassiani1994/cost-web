import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { RootState } from './state';
import { infoUserReducer } from '../services/infoUser/reducer';
import { authReducer, clearState } from '../services/auth/reducer';
import { loginReducer } from '../page/loginPage/reducer';
import { LoginEffects } from '../services/auth/effects';
import { LoginSuccessEffects } from '../page/loginPage/effects';

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  infoUser: infoUserReducer,
  auth: authReducer,
  login: loginReducer
};

export const metaReducers: MetaReducer<any>[] =  [];

export const rootEffects: any[] = [LoginEffects, LoginSuccessEffects];
