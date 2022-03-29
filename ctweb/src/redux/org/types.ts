import { NStringType } from "../../types";

type OrgInfoType = {
    name: NStringType;
    address1: NStringType;
    locality: NStringType;
    administrativeArea: NStringType;
    postalCode: NStringType;
    country: NStringType;
}

type OrgContactType = {
    firstName: NStringType;
    lastName: NStringType;
    identifier: NStringType;
    password: NStringType;
    passwordConfirm: NStringType;
    phoneNumber: NStringType;
}

export type OrgType = OrgInfoType & OrgContactType;

export type OrgActionType = {
    type: string;
    payload: OrgType;
}