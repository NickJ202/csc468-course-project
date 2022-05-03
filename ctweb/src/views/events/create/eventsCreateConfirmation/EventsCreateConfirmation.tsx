import { useHistory } from "react-router-dom";

import { EventsCreateProgress } from "../../../../components/molecules/EventsCreateProgress";
import { CenterComponent } from "../../../../components/molecules/CenterComponent";

import eventsConfirmation from "../../../../assets/events-confirmation.png";
import * as U from "../../../../urls";

import { language } from "../../../../language";

export default function EventsCreateConfirmation() {
  const history = useHistory();
  return (
    <>
      <EventsCreateProgress activeStep={2} />
      <CenterComponent
        header={language.events.confirm.title}
        imageSrc={eventsConfirmation}
        handleAction={() => history.push(U.events)}
        actionLabel={language.return}
      />
    </>
  );
}
