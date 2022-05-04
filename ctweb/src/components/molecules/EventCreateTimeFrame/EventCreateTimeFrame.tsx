import React from "react";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { storePartialEvent } from "../../../redux/events/actions";

import { FormField } from "../../atoms/FormField";
import { SectionTitle } from "../../atoms/SectionTitle";

import * as S from "./styles";
import { language } from "../../../language";
import { RootState } from "../../../redux/store";
export default function EventCreateTimeFrame() {
  const dispatch = useDispatch();
  const eventCreateData = useSelector(
    (state: RootState) => state.eventCreateReducer
  );
  const [calendarDate, setCalendarDate] = React.useState(new Date());
  const [startDate, setStartDate] = React.useState<string>(eventCreateData.startDate || "");
  const [endDate, setEndDate] = React.useState<string>(eventCreateData.endDate || "");
  const [startTime, setStartTime] = React.useState<string>(eventCreateData.startTime || "");
  const [endTime, setEndTime] = React.useState<string>(eventCreateData.endTime || "");

  React.useEffect(() => {
    dispatch(
      storePartialEvent({
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
      })
    );
  }, [startDate, endDate, startTime, endTime, dispatch]);

  const onDateChange = (date: any) => {
    setCalendarDate(date);
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();

    let parsedDate = mm + "/" + dd + "/" + yyyy;
    if (startDate.length <= 0) {
      setStartDate(parsedDate);
    } else {
      setEndDate(parsedDate);
    }
  };

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
          </S.Calendar>
        </S.CalendarContainer>
      </S.FlexContainer>
    </S.Wrapper>
  );
}
