import { EventsCreateStep } from "../../../../components/organisms/EventsCreateStep";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

import { InformationLine } from "../../../../components/atoms/InformationLine";

import { language } from "../../../../language";
import * as U from "../../../../urls";
import * as S from "./styles";

export default function EventsCreateSummaryView() {
  const eventCreateData = useSelector(
    (state: RootState) => state.eventCreateReducer
  );

  return (
    <EventsCreateStep
      continueUrl={U.eventsCreateConfirmation}
      progressLabel={1}
      backOption
      finalStep
    >
      <S.Wrapper>
        <S.MainContainer>
          <S.HeaderContainer>
            <h1>{language.summary}</h1>
          </S.HeaderContainer>
          <S.BodyContainer>
            <InformationLine
              label={language.basicInfo.eventTitle}
              data={eventCreateData.title || "-"}
            />
            <InformationLine
              label={language.dateRange}
              data={eventCreateData.startDate + " - " + eventCreateData.endDate}
            />
            <InformationLine
              label={language.timeRange}
              data={eventCreateData.startTime + " - " + eventCreateData.endTime}
            />
            <InformationLine
              label={language.targetAudience}
              data={eventCreateData.min + " - " + eventCreateData.max}
            />
            <InformationLine
              label={language.location.fields.address}
              data={eventCreateData.address1 || "-"}
            />
            <InformationLine
              label={language.location.fields.city}
              data={eventCreateData.locality || "-"}
            />
            <InformationLine
              label={language.location.fields.state}
              data={eventCreateData.administrativeArea || "-"}
            />
            <InformationLine
              label={language.location.fields.postalCode}
              data={eventCreateData.postalCode || "-"}
            />
            <InformationLine
              label={language.location.fields.country}
              data={eventCreateData.country || "-"}
            />
          </S.BodyContainer>
        </S.MainContainer>
      </S.Wrapper>
    </EventsCreateStep>
  );
}
