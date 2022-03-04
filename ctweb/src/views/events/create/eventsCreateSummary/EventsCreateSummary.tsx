import {EventsCreateStep} from "../../../../components/organisms/EventsCreateStep";

import * as U from "../../../../urls";
import * as C from "../../../../config";

export default function EventsCreateSummaryView() {
    return (
        <EventsCreateStep
            continueUrl={U.eventsCreateConfirmation}
            progressLabel={C.URLS.account.length}
            backOption
            finalStep
        />
    )
}