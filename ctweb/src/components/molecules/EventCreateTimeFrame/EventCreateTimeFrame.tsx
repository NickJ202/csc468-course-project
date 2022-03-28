import React from "react";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';

import { FormField } from "../../atoms/FormField";
import { SectionTitle } from "../../atoms/SectionTitle";

import * as S from "./styles";
import { language } from "../../../language";

export default function EventCreateTimeFrame() {
  const [calendarDate, setCalendarDate] = React.useState(new Date());
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");
  // const [startTime, setStartTime] = React.useState<string>("");
  // const [endTime, setEndTime] = React.useState<string>("");

  const onDateChange = (date: any) => {
    setCalendarDate(date);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();

    let parsedDate = mm + '/' + dd + '/' + yyyy;
    console.log(parsedDate);
    if (startDate.length <= 0) {
      setStartDate(parsedDate);
    }
    else {
      setEndDate(parsedDate);
    }
  }

  React.useEffect(() => {
    console.log()
  }, []);

  return (
    <S.Wrapper>
      <SectionTitle header={language.timeFrame.header} />
      <S.FlexContainer>
        <S.Fields>
          <FormField
            pattern="\d{1,2}/\d{1,2}/\d{4}"
            label={language.timeFrame.startDate}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder={language.timeFrame.dateFormatter}
          />
          <FormField
            pattern="\d{1,2}/\d{1,2}/\d{4}"
            label={language.timeFrame.endDate}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder={language.timeFrame.dateFormatter}
          />
          {/* <FormField
            label={language.timeFrame.startTime}
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder={language.timeFrame.timeFormatter}
          />
          <FormField
            label={language.timeFrame.endTime}
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            placeholder={language.timeFrame.timeFormatter}
          /> */}
        </S.Fields>
        <S.CalendarContainer>
          <S.Calendar>
            <Calendar onChange={onDateChange} value={calendarDate} />
          </S.Calendar>
        </S.CalendarContainer>
      </S.FlexContainer>
    </S.Wrapper>
  );
}