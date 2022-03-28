import { NStringType } from "../../types";

type EventBasicInfoType = {
    title: NStringType;
    description: NStringType;
}

type EventLocationType = {
    address1: NStringType;
    locality: NStringType;
    administrativeArea: NStringType;
    postalCode: NStringType;
    country: NStringType;
}

export type EventType = EventBasicInfoType & EventLocationType;

export type EventActionType = {
    type: string,
    payload: EventType
}