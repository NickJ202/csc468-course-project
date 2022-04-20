import { EventCreateBasicInfo } from "../../molecules/EventCreateBasicInfo";
import { EventCreateLocation } from "../../molecules/EventCreateLocation";
import { EventCreateTimeFrame } from "../../molecules/EventCreateTimeFrame";
import { EventCreateParticipants } from "../../molecules/EventCreateParticipants";

import * as S from "./styles";

export default function EventsCreate1() {
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
