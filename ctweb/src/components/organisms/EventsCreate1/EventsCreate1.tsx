import { EventCreateBasicInfo } from "../../molecules/EventCreateBasicInfo";
import { EventCreateLocation } from "../../molecules/EventCreateLocation";
import { EventCreateTimeFrame } from "../../molecules/EventCreateTimeFrame";
import { EventCreateCoverPhoto } from "../../molecules/EventCreateCoverPhoto";

import * as S from "./styles";

export default function EventsCreate1() {
    return (
        <S.Wrapper>
            <S.BasicInfo>
                <EventCreateBasicInfo/>
            </S.BasicInfo>
            <S.TimeFrame>
                <EventCreateTimeFrame/>
            </S.TimeFrame>
            <S.Location>
                <EventCreateLocation/>
            </S.Location>
            <S.CoverPhoto>
                <EventCreateCoverPhoto/>
            </S.CoverPhoto>
        </S.Wrapper>
    )
}