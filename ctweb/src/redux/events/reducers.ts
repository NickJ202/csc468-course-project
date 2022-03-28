import * as C from "../events/constants";
import { EventType, EventActionType } from "./types";

export const initialState: EventType = {
    title: null,
    description: null,
    address1: null,
    locality: null,
    administrativeArea: null,
    postalCode: null,
    country: null
}

export default function eventCreateReducer(state: EventType = initialState, action: EventActionType) {
    switch(action.type) {
        case C.STORE_PARTIAL_EVENT:
            return Object.assign({}, state, {
                title: action.payload.title ?? state.title,
                description: action.payload.description ?? state.description,
                address1: action.payload.address1 ?? state.address1,
                locality: action.payload.locality ?? state.locality,
                administrativeArea: action.payload.administrativeArea ?? state.administrativeArea,
                postalCode: action.payload.postalCode ?? state.postalCode,
                country: action.payload.country ?? state.country
            });
        default:
            return state;
    }
}