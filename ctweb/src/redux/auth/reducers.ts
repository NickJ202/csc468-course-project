import * as C from "./constants";
import { AuthType, AuthActionType } from "./types";

export const initialState: AuthType = {
    token: null,
    userId: null,
    org: null,
    email: null
};

export default function authReducer(
    state: AuthType = initialState,
    action: AuthActionType
) {
    switch(action.type) {
        case C.SET_AUTH:
            return Object.assign({}, state, {
                token: action.payload.token ?? state.token,
                userId: action.payload.userId ?? state.userId,
                org: action.payload.org ?? state.org,
                email: action.payload.email ?? state.email
            });
        case C.CLEAR_AUTH:
            return Object.assign({}, state, {
                token: null,
                userId: null,
                org: null,
                email: null
            });
        default:
            return state;
    }
}