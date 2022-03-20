import { PlanStep } from "../../molecules/PlanStep";
import { EventCreateLocation } from "../../molecules/EventCreateLocation";
import { EventCreateTimeFrame } from "../../molecules/EventCreateTimeFrame";
import { EventCreateCoverPhoto } from "../../molecules/EventCreateCoverPhoto";
// import { CreateStep } from "../../molecules/CreateStep";
// import { GrowStep } from "../../molecules/GrowStep";

import * as S from "./styles";

import * as CF from "../../../config";
import { language } from "../../../language";

export default function EventsCreate1() {
    return (
        <S.Wrapper>
            <S.BasicInfo>
                <PlanStep
                    title={language.basicInfo.header}
                    fields={CF.CREATE.basicInfo.fields}
                />
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