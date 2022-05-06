import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { EventCreateBasicInfo } from "../../molecules/EventCreateBasicInfo";
import { EventCreateLocation } from "../../molecules/EventCreateLocation";
import { EventCreateTimeFrame } from "../../molecules/EventCreateTimeFrame";
import { EventCreateParticipants } from "../../molecules/EventCreateParticipants";

import { storePartialEvent } from "../../../redux/events/actions";

import * as S from "./styles";

import { RootState } from "../../../redux/store";

export default function EventsCreate1() {
  const dispatch = useDispatch();
  const authData = useSelector(
    (state: RootState) => state.authReducer
  );

  React.useEffect(() => {
    dispatch(storePartialEvent({
      org: authData.org
    }));
  }, [dispatch, authData.org]);

  return (
    <S.Wrapper>
      <S.BasicInfo>
        <EventCreateBasicInfo />
      </S.BasicInfo>
      <S.TimeFrame>
        <EventCreateTimeFrame />
      </S.TimeFrame>
      <S.Location>
        <EventCreateParticipants />  
      </S.Location>
      <S.Participants>
        <EventCreateLocation />
      </S.Participants>
    </S.Wrapper>
  );
}
