import {useHistory} from "react-router-dom";

import {EventsCreateProgress} from "../../molecules/EventsCreateProgress";

import {Button} from "../../atoms/Button";

import {IProps} from "./types";
import * as S from "./styles";

import {language} from "../../../language";

export default function EventsCreateStep(props: IProps) {
    const history = useHistory()

    function handleContinue() {
        history.push(props.continueUrl);
    }

    return (
        <S.Wrapper>
            <EventsCreateProgress activeStep={props.progressLabel}/>
            <S.Actions>
                <S.ButtonContainer>
                    {props.backOption &&
                    <Button
                        formSubmit={false}
                        label={language.back}
                        disabled={false}
                        type={"secondary"}
                        handlePress={() => history.goBack()}
                    />
                    }
                </S.ButtonContainer>
                <S.ButtonContainer>
                    <Button
                        formSubmit={false}
                        label={props.finalStep ? language.publish : language.continue}
                        disabled={false}
                        type={"primary"}
                        handlePress={handleContinue}
                    />
                </S.ButtonContainer>
            </S.Actions>
        </S.Wrapper>
    );
}