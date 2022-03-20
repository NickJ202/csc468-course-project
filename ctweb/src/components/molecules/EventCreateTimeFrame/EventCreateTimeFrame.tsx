import React from "react";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';

import { FormField } from "../../atoms/FormField";
import { SectionTitle } from "../../atoms/SectionTitle";

import * as S from "./styles";
import { language } from "../../../language";

export default function EventCreateTimeFrame() {
  const [value, onChange] = React.useState(new Date());

  console.log(value)

  return (
    <S.Wrapper>
      <SectionTitle header={language.timeFrame.header} />
      <S.FlexContainer>
        <S.Fields>
          <FormField
            label={language.timeFrame.startDate}
            value={""}
            onChange={() => console.log(value)}
            placeholder={language.timeFrame.dateFormatter}
          />
          <FormField
            label={language.timeFrame.endDate}
            value={""}
            onChange={() => console.log(value)}
            placeholder={language.timeFrame.dateFormatter}
          />
        </S.Fields>
        <S.CalendarContainer>
          <S.Calendar>
            <Calendar onChange={onChange} value={value} />
          </S.Calendar>
        </S.CalendarContainer>
      </S.FlexContainer>
    </S.Wrapper>
  );
}