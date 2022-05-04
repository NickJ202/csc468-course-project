import { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import * as http from "../../http-services";
import * as C from "./constants";
import * as CF from "../../config";
import * as T from "./types";

export function storePartialEvent(
  payload: T.EventBasicInfoType |
    T.EventLocationType |
    T.EventTimeFrameType |
    T.EventParticipantsType |
    T.EventOrgType
) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: C.STORE_PARTIAL_EVENT,
      payload: payload,
    });
  };
}

export function createEventRequest(payload: T.EventType) {
  console.log(payload);
  return (dispatch: Dispatch) =>
    http.post(CF.EVENTS_ENDPOINT, payload).then((response: AxiosResponse) => {
      dispatch(createEventSuccess(response));
    });
}

export function createEventSuccess(response: AxiosResponse) {
  return { type: C.CREATE_EVENT_SUCCESS, response: response };
}