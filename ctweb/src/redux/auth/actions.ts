import { Dispatch } from "redux";

import * as C from "./constants";
import * as T from "./types";

export function setAuth(payload: T.AuthType) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: C.SET_AUTH,
            payload: payload
        });
    };
}

export function clearAuth() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: C.CLEAR_AUTH,
            payload: null
        })
    }
}