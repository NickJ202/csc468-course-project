import { EventsCreate1 } from "../../../components/organisms/EventsCreate1";
import { EventsCreateStep } from "../../../components/organisms/EventsCreateStep";

import * as U from "../../../urls";

export default function EventsCreateView() {
  return (
    <EventsCreateStep continueUrl={U.eventsCreateSummary} progressLabel={0}>
      <EventsCreate1 />
    </EventsCreateStep>
  );
}
