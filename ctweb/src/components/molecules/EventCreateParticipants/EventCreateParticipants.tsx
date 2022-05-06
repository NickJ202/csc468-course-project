import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storePartialEvent } from "../../../redux/events/actions";

import * as S from "./styles";
import { language } from "../../../language";
import { SectionTitle } from "../../atoms/SectionTitle";
import { FormField } from "../../atoms/FormField";
import { TextArea } from "../../atoms/TextArea";
import { RootState } from "../../../redux/store";

export default function EventCreateParticipants() {
  const dispatch = useDispatch();
  const eventCreateData = useSelector(
    (state: RootState) => state.eventCreateReducer
  );

  const [min, setMin] = React.useState<string>(eventCreateData.minAttendees || "");
  const [max, setMax] = React.useState<string>(eventCreateData.maxAttendees || "");
  const [tips, setTips] = React.useState<string>(eventCreateData.tips || "");
  
  React.useEffect(() => {
    dispatch(
      storePartialEvent({
        minAttendees: min,
        maxAttendees: max,
        tips: tips
      })
    );
  }, [min, max, tips, dispatch]);

  return (
    <S.Wrapper>
      <SectionTitle header={language.participants.header} />
      <S.FlexContainer>
        <S.RowContainer>
          <S.HalfField>
            <FormField
              label={language.min}
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </S.HalfField>
          <S.HalfField>
            <FormField
              label={language.max}
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </S.HalfField>
        </S.RowContainer>
        <TextArea
          label={language.tips}
          value={tips}
          onChange={(e: any) => setTips(e.target.value)}
        />
      </S.FlexContainer>
    </S.Wrapper>
  );
}