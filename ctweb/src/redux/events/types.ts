import { NStringType } from "../../types";

export type EventBasicInfoType = {
  title: NStringType;
  description: NStringType;
};

export type EventLocationType = {
  address1: NStringType;
  locality: NStringType;
  administrativeArea: NStringType;
  postalCode: NStringType;
  country: NStringType;
};

export type EventTimeFrameType = {
  startDate: NStringType;
  endDate: NStringType;
  startTime: NStringType;
  endTime: NStringType;
}

export type EventParticipantsType = {
  minAttendees: NStringType;
  maxAttendees: NStringType;
  tips: NStringType;
}

export type EventOrgType = {
  org: NStringType;
}

export type EventType = EventBasicInfoType &
  EventLocationType &
  EventTimeFrameType &
  EventParticipantsType &
  EventOrgType;

export type EventActionType = {
  type: string;
  payload: EventType;
};
