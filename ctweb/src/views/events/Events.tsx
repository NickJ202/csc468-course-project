import React from "react";
import {useHistory} from "react-router-dom";

import {Events} from "../../components/organisms/Events";

import {IViewProps} from "../../types";

import * as U from "../../urls";

export default function EventsView(props: IViewProps) {
    const history = useHistory();

    function handleRedirectCreate() {
        history.push(U.eventsCreate1);
    }

    return (
        <Events
            handleRedirectCreate={handleRedirectCreate}
        />
    )
}