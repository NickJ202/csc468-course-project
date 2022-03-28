import { Dispatch } from "redux";

import * as C from "./constants";
import { EventType } from "./types";

export function storePartialEvent(payload: EventType) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: C.STORE_PARTIAL_EVENT,
            payload: payload
        })
    }
}