import { AuthActionType, AuthActions } from './action';
import { AuthState, initialAuthState } from './state';
import { ActionReducer } from '@ngrx/store';
import { RootState } from '../root/state';

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
  console.log('estado en reducers', state);
  switch (action.type) {
    case AuthActionType.IsAuthenticated:
        return {
          ...state, auth: action.payload, message: 'the user has successfully authenticated'
        };
    case AuthActionType.IsDisconnected:
        return {...initialAuthState, message: 'the user has closed session successfully'};
    case AuthActionType.ErrorAuth:
        return {...state, err: action.payload, message: '[Auth] Error'};
    default:
      return state;
  }
}

export function clearState(reducer) {
  return (state: AuthState, action: AuthActions): AuthState => {
    if (action.type === AuthActionType.IsDisconnected || action.type === AuthActionType.ErrorAuth) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
