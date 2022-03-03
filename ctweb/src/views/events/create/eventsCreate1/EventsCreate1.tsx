import {EventsCreateStep} from "../../../../components/organisms/EventsCreateStep";

import * as C from "../../../../config";

export default function EventsCreate1View() {
    return (
        <EventsCreateStep
            continueUrl={C.URLS.eventsCreate[1].url}
            progressLabel={C.URLS.eventsCreate[0].index}
        />
    );
}