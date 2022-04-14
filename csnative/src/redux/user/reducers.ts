import * as C from './constants';
import { UserState, UserAction, UserType } from '../types';

export const initialState: UserType = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  oauthToken: "",
  verificationCode: "",
};

// Need default export here ?
export default function userReducer(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case C.SAVE_PARTIAL_USER:
      return Object.assign({}, state, {
        email: action.payload.email === null ? state.email : action.payload.email,
        password: action.payload.password === null ? state.password : action.payload.password,
        firstName: action.payload.firstName === null ? state.firstName : action.payload.firstName,
        lastName: action.payload.lastName === null ? state.lastName : action.payload.lastName,
        phoneNumber: action.payload.phoneNumber === null ? state.phoneNumber : action.payload.phoneNumber,
        oauthToken: action.payload.oauthToken === null ? state.oauthToken : action.payload.oauthToken,
        verificationCode: action.payload.verificationCode === null ? state.verificationCode : action.payload.verificationCode,
      });
      case C.REGISTER_USER_SUCCESS:
        return Object.assign({}, state, {
          email: state.email,
          password: state.password,
          firstName: state.firstName,
          lastName: state.lastName,
          phoneNumber: state.phoneNumber,
          oauthToken: state.oauthToken,
          verificationCode: state.verificationCode,
        });
      case C.REGISTER_USER_FAILURE:
        return Object.assign({}, state, {
          email: state.email,
          password: state.password,
          firstName: state.firstName,
          lastName: state.lastName,
          phoneNumber: state.phoneNumber,
          oauthToken: state.oauthToken,
          verificationCode: state.verificationCode,
        });
    default:
      return state;
  }
}