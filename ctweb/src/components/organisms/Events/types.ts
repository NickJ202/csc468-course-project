import { EventType } from "../../../redux/events/types";

export interface IProps {
  handleRedirectCreate: () => void;
  events: EventType[] | null;
}
