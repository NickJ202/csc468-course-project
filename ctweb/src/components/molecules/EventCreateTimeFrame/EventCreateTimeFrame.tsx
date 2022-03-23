import React from "react";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';

import { FormField } from "../../atoms/FormField";
import { SectionTitle } from "../../atoms/SectionTitle";

import * as S from "./styles";
import { language } from "../../../language";
import { Button } from "../../atoms/Button";
import { BigIntStats } from "fs";

export default function EventCreateTimeFrame() {
  const [calendarDate, setCalendarDate] = React.useState(new Date());
  const [stringDate, setStringDate] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");
  const [startTime, setStartTime] = React.useState<string>("");
  const [endTime, setEndTime] = React.useState<string>("");

  const onDateChange = (date: any) => {
    setCalendarDate(date);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    var today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
    setStringDate(today);
  }

  const handleStartClick = () => {
    setStartDate(stringDate);
  }

  const handleEndClick = () => {
    setEndDate(stringDate);
  }

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
          <FormField
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
          />
        </S.Fields>
        <S.CalendarContainer>
          <S.Calendar>
            <Calendar onChange={onDateChange} value={calendarDate} />
            <S.Button onClick={handleStartClick}>Set Start Date</S.Button>
            <S.Button onClick={handleEndClick}>Set End Date</S.Button>          
          </S.Calendar>
        </S.CalendarContainer>
      </S.FlexContainer>
    </S.Wrapper>
  );
}