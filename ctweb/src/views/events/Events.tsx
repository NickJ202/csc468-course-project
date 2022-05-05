import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Events } from "../../components/organisms/Events";
import { Loader } from "../../components/atoms/Loader";

import * as U from "../../urls";
import * as CF from "../../config";
import * as http from "../../http-services";

import { RootState } from "../../redux/store";
import { EventType } from "../../redux/events/types";

export default function EventsView() {
  const history = useHistory();
  const authData = useSelector(
    (state: RootState) => state.authReducer
  );

  const [loading, setLoading] = React.useState<boolean>(false);
  const [events, setEvents] = React.useState<EventType[] | null>(null);

  React.useEffect(() => {
    async function getEvents() {
      setLoading(true);
      await http.get(CF.EVENTS_ENDPOINT, {org: authData.org}).then((response) => {
        console.log(response.data)
        setEvents(response.data);
      }).catch((error) => {
        console.log(error);
      });
      setLoading(false);
    }
    getEvents();
  }, [authData.org]);

  function handleRedirectCreate() {
    history.push(U.eventsCreate);
  }

  return loading ?
    <Loader /> :
    <Events
      events={events}
      handleRedirectCreate={handleRedirectCreate}
    />
}
