import { EventsCreateStep } from "../../../../components/organisms/EventsCreateStep";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { SectionTitle, FlexContainer } from "./styles";

import * as U from "../../../../urls";

export default function EventsCreateSummaryView() {
  const eventCreateData = useSelector(
    (state: RootState) => state.eventCreateReducer
  );
  
    function handleLog() {
      console.log(eventCreateData);
    }

  let dateStr = eventCreateData.startDate + " - " + eventCreateData.endDate;
  let timeStr = eventCreateData.startTime + " - " + eventCreateData.endTime;
  let participantStr = eventCreateData.min + " - " + eventCreateData.max;
  let cityStr = eventCreateData.locality + ", " + eventCreateData.administrativeArea;
  return (
    <EventsCreateStep
      continueUrl={U.eventsCreateConfirmation}
      backOption
      finalStep
    >
      <h1>Summary</h1>
      <FlexContainer>
        <SectionTitle>Title of Event</SectionTitle>
        <h2>{eventCreateData.title}</h2>
        <br />
        <SectionTitle>Dates</SectionTitle>
        <h2>{dateStr}</h2>
        <br />
        <SectionTitle>Times</SectionTitle>
        <h2>{timeStr}</h2>
        <br />
        <SectionTitle>Target Attendance</SectionTitle>
        <h2>{participantStr}</h2>
        <br />
        <SectionTitle>Location</SectionTitle>
        <h2>{eventCreateData.address1}</h2>
        <h2>{cityStr}</h2>
        <h2>{eventCreateData.postalCode}</h2>
      </FlexContainer>
    </EventsCreateStep>
  );
}
