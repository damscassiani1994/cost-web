import { InfoUserActionType, InfoUserActions } from './actions';
import { InfoUserState, initialInfoUserState } from './state';

export function infoUserReducer(state = initialInfoUserState, action: InfoUserActions): InfoUserState {
  switch (action.type) {
    case InfoUserActionType.AddInfo:
      return {
        infoUsers: [
          ...state.infoUsers,
          {
            userId: action.payload.userId,
            income: action.payload.income,
            type_period: action.payload.type_period
          }
        ],
        message: 'Se inserto un nuevo infoUser'
      };
    case InfoUserActionType.LoadInfoUser:
        return {
          infoUsers: action.payload,
          message: 'Se listaron los infoUser'
        };
    default:
        return state;
  }

}
