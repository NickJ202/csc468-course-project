import * as C from "./constants";
import { OrgActionType } from "./types";

// Should be OrgType workaround to nest objects
export const initialState: any = {
  name: null,
  address1: null,
  locality: null,
  administrativeArea: null,
  postalCode: null,
  country: null,
  admin: {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    phone: null,
  },
};

// Should be OrgType workaround to nest objects
export default function orgCreateReducer(
  state: any = initialState,
  action: OrgActionType
) {
  switch (action.type) {
    case C.STORE_PARTIAL_ORG:
      return Object.assign({}, state, {
        name: action.payload.name ?? state.name,
        address1: action.payload.address1 ?? state.address1,
        locality: action.payload.locality ?? state.locality,
        administrativeArea:
          action.payload.administrativeArea ?? state.administrativeArea,
        postalCode: action.payload.postalCode ?? state.postalCode,
        country: action.payload.country ?? state.country,
        admin: {
          email: action.payload.email ?? state.admin.email,
          password: action.payload.password ?? state.admin.password,
          firstName: action.payload.firstName ?? state.admin.firstName,
          lastName: action.payload.lastName ?? state.admin.lastName,
          phone: action.payload.phone ?? state.admin.phone,
        },
      });
    default:
      return state;
  }
}
