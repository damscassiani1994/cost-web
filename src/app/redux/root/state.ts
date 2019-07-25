import { InfoUserState } from '../infoUser/state';
import { AuthState } from '../auth/state';
import { LoginState } from '../loginPage/state';

export interface RootState {
  router: any;
  infoUser: InfoUserState;
  auth: AuthState;
  login: LoginState;
}
