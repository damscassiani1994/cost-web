import { InfoUserState } from '../services/infoUser/state';
import { AuthState } from '../services/auth/state';
import { LoginState } from '../page/loginPage/state';

export interface RootState {
  router: any;
  infoUser: InfoUserState;
  auth: AuthState;
  login: LoginState;
}
