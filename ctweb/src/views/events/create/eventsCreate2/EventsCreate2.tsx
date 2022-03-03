import {EventsCreateStep} from "../../../../components/organisms/EventsCreateStep";

import * as C from "../../../../config";

export default function EventsCreate2View() {
    return (
        <EventsCreateStep
            continueUrl={C.URLS.eventsCreate[2].url}
            progressLabel={C.URLS.eventsCreate[1].index}
            backOption
        />
    );
}