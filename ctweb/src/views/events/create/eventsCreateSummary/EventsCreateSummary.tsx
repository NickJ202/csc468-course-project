import {EventsCreateStep} from "../../../../components/organisms/EventsCreateStep";

import * as U from "../../../../urls";

export default function EventsCreateSummaryView() {
    return (
        <EventsCreateStep
            continueUrl={U.eventsCreateConfirmation}
            backOption
            finalStep
        >
            <h1>summary</h1>
        </EventsCreateStep>
    )
}