import {EventsCreateStep} from "../../../../components/organisms/EventsCreateStep";

import * as U from "../../../../urls";
import * as C from "../../../../config";

export default function EventsCreate3View() {
    return (
        <EventsCreateStep
            continueUrl={U.eventsCreateSummary}
            progressLabel={C.URLS.eventsCreate[2].index}
            backOption
        />
    );
}