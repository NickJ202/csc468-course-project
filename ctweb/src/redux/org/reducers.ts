import * as C from "../events/constants";
import { OrgType, OrgActionType } from "./types";

export const initialState: OrgType = {
    name: null,
    address1: null,
    locality: null,
    administrativeArea: null,
    postalCode: null,
    country: null,
    firstName: null,
    lastName: null,
    identifier: null,
    phoneNumber: null,
}

export default function eventCreateReducer(state: OrgType = initialState, action: OrgActionType) {
    switch(action.type) {
        case C.STORE_PARTIAL_EVENT:
            return Object.assign({}, state, {
                name: action.payload.name ?? state.name,
                address1: action.payload.address1 ?? state.address1,
                locality: action.payload.locality ?? state.locality,
                administrativeArea: action.payload.administrativeArea ?? state.administrativeArea,
                postalCode: action.payload.postalCode ?? state.postalCode,
                country: action.payload.country ?? state.country,
                firstName: action.payload.firstName ?? state.firstName,
                lastName: action.payload.lastName ?? state.lastName,
                identifier: action.payload.identifier ?? state.identifier,
                phoneNumber: action.payload.phoneNumber ?? state.phoneNumber,
            });
        default:
            return state;
    }
}