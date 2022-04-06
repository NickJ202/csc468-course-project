import { AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { post } from "../services";
import * as C from "./constants";
import * as CF from "../../config";
import * as T from "./types";

export function storePartialOrg(
  payload: T.OrgInfoType | T.OrgContactType | T.OrgAdminType
) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: C.STORE_PARTIAL_ORG,
      payload: payload,
    });
  };
}

export function registerOrgRequest(payload: T.OrgType) {
  return (dispatch: Dispatch) =>
    post(CF.ORG_ENDPOINT, payload).then((response) => {
      dispatch(registerOrgSuccess(response));
    });
}

export function registerOrgSuccess(response: AxiosResponse) {
  return { type: C.REGISTER_ORG_SUCCESS, response: response };
}

export function registerOrgFailure(error: any) {
  return { type: C.REGISTER_ORG_FAILURE, error: error };
}
