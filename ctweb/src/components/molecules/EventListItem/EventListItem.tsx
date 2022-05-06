import { InformationLine } from "../../atoms/InformationLine";

import { IProps } from "./types";

import { language } from "../../../language";
import * as S from "./styles";

export default function EventListItem(props: IProps) {
    return (
        <S.Wrapper>
            <S.Title>{props.event.title}</S.Title>
            <S.Divider />
            <S.Section>
                <InformationLine
                    label={language.dateRange}
                    data={props.event.startDate + " - " + props.event.endDate}
                />
                <S.DividerVertical />
                <InformationLine
                    label={language.timeRange}
                    data={props.event.startTime + " - " + props.event.endTime}
                />
            </S.Section>
        </S.Wrapper>
    )
}