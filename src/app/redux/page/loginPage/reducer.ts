import { LoginState, initialLoginState } from './state';
import { LoginActions, LoginActionType, IsLogin } from './action';

export function loginReducer(state = initialLoginState, action: LoginActions): LoginState {
  switch (action.type) {
    case LoginActionType.IsLogin:
        return {
          ...state, credentials: {
              username: action.payload.username, password: undefined
            }, message: action.type
        };
    case LoginActionType.IsSignOut:
        return {...initialLoginState, message: action.type};
    default:
      return state;
  }
}
