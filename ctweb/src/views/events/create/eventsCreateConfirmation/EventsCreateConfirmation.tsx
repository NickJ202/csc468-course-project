import React from "react";
import { useHistory } from "react-router-dom";

import { CenterComponent } from "../../../../components/molecules/CenterComponent";

import eventsConfirmation from "../../../../assets/events-confirmation.png";
import * as U from "../../../../urls";

import { language } from "../../../../language";

export default function EventsCreateConfirmation() {
  const history = useHistory();
  return (
    <CenterComponent
      header={language.events.confirm.title}
      imageSrc={eventsConfirmation}
      information={language.events.confirm.info}
      handleAction={() => history.push(U.events)}
      actionLabel={language.return}
    />
  );
}
