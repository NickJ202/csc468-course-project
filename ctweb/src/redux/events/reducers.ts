import * as C from "../events/constants";
import { EventType, EventActionType } from "./types";

export const initialState: EventType = {
  title: null,
  description: null,
  startDate: null,
  endDate: null,
  startTime: null,
  endTime: null,
  minAttendees: null,
  maxAttendees: null,
  tips: null,
  address1: null,
  locality: null,
  administrativeArea: null,
  postalCode: null,
  country: null,
  org: null
};

export default function eventCreateReducer(
  state: EventType = initialState,
  action: EventActionType
) {
  switch (action.type) {
    case C.STORE_PARTIAL_EVENT:
      return Object.assign({}, state, {
        title: action.payload.title ?? state.title,
        description: action.payload.description ?? state.description,
        startDate: action.payload.startDate ?? state.startDate,
        endDate: action.payload.endDate ?? state.endDate,
        startTime: action.payload.startTime ?? state.startTime,
        endTime: action.payload.endTime ?? state.endTime,
        minAttendees: action.payload.minAttendees ?? state.minAttendees,
        maxAttendees: action.payload.maxAttendees ?? state.maxAttendees,
        tips: action.payload.tips ?? state.tips,
        address1: action.payload.address1 ?? state.address1,
        locality: action.payload.locality ?? state.locality,
        administrativeArea:
          action.payload.administrativeArea ?? state.administrativeArea,
        postalCode: action.payload.postalCode ?? state.postalCode,
        country: action.payload.country ?? state.country,
        org: action.payload.org ?? state.org
      });
    default:
      return state;
  }
}
