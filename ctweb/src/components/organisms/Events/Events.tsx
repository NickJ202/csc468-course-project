import React from "react";

import { CenterComponent } from "../../molecules/CenterComponent";

import eventsEmpty from "../../../assets/events-empty.png";
import { language } from "../../../language";

import { IProps } from "./types";

export default function Events(props: IProps) {
  return (
    <CenterComponent
      header={language.events.title}
      imageSrc={eventsEmpty}
      information={language.events.createFirst}
      handleAction={props.handleRedirectCreate}
      actionLabel={language.create}
    />
  );
}
