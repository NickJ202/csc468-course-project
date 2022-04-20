import { Dispatch } from "redux";

import * as C from "./constants";
import * as T from "./types";

export function storePartialEvent(
  payload: T.EventBasicInfoType | T.EventLocationType | T.EventTimeFrameType | T.EventParticipantsType
) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: C.STORE_PARTIAL_EVENT,
      payload: payload,
    });
  };
}
