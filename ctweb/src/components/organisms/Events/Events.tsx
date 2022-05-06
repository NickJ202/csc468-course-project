import { CenterComponent } from "../../molecules/CenterComponent";
import { EventListItem } from "../../molecules/EventListItem";
import { Button } from "../../atoms/Button";

import { PortalHandler } from "../../../handlers/PortalHandler";

import eventsEmpty from "../../../assets/events-empty.png";
import { language } from "../../../language";

import { IProps } from "./types";
import { EventType } from "../../../redux/events/types";

import * as CF from "../../../config"; 
import * as S from "./styles";

export default function Events(props: IProps) {
  function getEventContent() {
    if (props.events && props.events.length > 0) {
      return (
        <>
        <PortalHandler domNode={CF.DOM.viewHeader}>
          <Button 
            formSubmit={false}
            label={language.create}
            handlePress={props.handleRedirectCreate}
            type={"primary"}
            disabled={false}
          />
        </PortalHandler>
          <S.Wrapper>
            {props.events.map((event: EventType, index: number) => {
              return (
                <EventListItem event={event} key={index} />
              )
            })}
          </S.Wrapper>
        </>
      )
    }
    else {
      return (
        <CenterComponent
          header={language.events.title}
          imageSrc={eventsEmpty}
          information={language.events.createFirst}
          handleAction={props.handleRedirectCreate}
          actionLabel={language.create}
        />
      )
    }
  }

  return props.events ? (getEventContent()) : null;
}
