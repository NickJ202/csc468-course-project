import { Dispatch } from 'redux';

import * as C from "./constants";
import { OrgType } from './types';

export const storePartialOrg = (payload: OrgType) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: C.STORE_PARTIAL_ORG,
            payload: payload
        })
    }
}