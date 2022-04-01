import { NStringType } from "../../types";

export type OrgInfoType = {
    name: NStringType;
    address1: NStringType;
    locality: NStringType;
    administrativeArea: NStringType;
    postalCode: NStringType;
    country: NStringType;
}

export type OrgContactType = {
    firstName: NStringType;
    lastName: NStringType;
    phone: NStringType;
}

export type OrgAdminType = {
    email: NStringType;
    password: NStringType;
}

export type OrgType = OrgInfoType & OrgContactType & OrgAdminType;

export type OrgActionType = {
    type: string;
    payload: OrgType;
}