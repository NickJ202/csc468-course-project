import { useHistory } from "react-router-dom";

import { Events } from "../../components/organisms/Events";

import * as U from "../../urls";

export default function EventsView() {
  const history = useHistory();

  function handleRedirectCreate() {
    history.push(U.eventsCreate);
  }

  return <Events handleRedirectCreate={handleRedirectCreate} />;
}
