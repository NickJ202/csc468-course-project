import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button } from "../../atoms/Button";
import { EventsCreateProgress } from "../../molecules/EventsCreateProgress";

import * as U from "../../../urls";
import { language } from "../../../language";
import { IProps } from "./types";
import * as S from "./styles";
import { createEventRequest } from "../../../redux/events/actions";

import { RootState } from '../../../redux/store';

export default function EventsCreateStep(props: IProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventCreateData = useSelector(
    (state: RootState) => state.eventCreateReducer
  );

  const [loading, setLoading] = React.useState<boolean>(false);
  const [redirectEvents, setRedirectEvents] = React.useState<boolean>(false);

  function handleContinue() {
    if (props.finalStep) {
      setLoading(true);
      Promise.all([dispatch(createEventRequest(eventCreateData))])
        .then(() => {
          setRedirectEvents(true);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    }
    else {
      history.push(props.continueUrl);
    }
  }

  return redirectEvents ? (<Redirect to={U.events}/>) : (
    <S.Wrapper>
      <EventsCreateProgress activeStep={props.progressLabel} />
      <S.CWrapper>{props.children}</S.CWrapper>
      <S.Actions>
        <S.ButtonContainer>
          {props.backOption && (
            <Button
              formSubmit={false}
              label={language.back}
              disabled={loading}
              type={"secondary"}
              handlePress={() => history.goBack()}
            />
          )}
        </S.ButtonContainer>
        <S.ButtonContainer>
          <Button
            formSubmit={false}
            label={props.finalStep ? language.publish : language.continue}
            disabled={loading}
            type={"primary"}
            loading={loading}
            handlePress={handleContinue}
          />
        </S.ButtonContainer>
      </S.Actions>
    </S.Wrapper>
  );
}
