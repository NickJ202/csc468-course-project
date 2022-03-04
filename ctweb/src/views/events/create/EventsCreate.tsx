import React from "react";
import {useHistory} from "react-router-dom";

import * as U from "../../../urls";

export default function EventsCreateView() {
    const history = useHistory();

    React.useEffect(() => {
        history.push(U.eventsCreate1);
    }, [history])

    return null;
}