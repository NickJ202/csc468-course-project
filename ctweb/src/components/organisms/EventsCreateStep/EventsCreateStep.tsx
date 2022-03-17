import {useHistory} from "react-router-dom";

import {EventsCreateProgress} from "../../molecules/EventsCreateProgress";

import {Button} from "../../atoms/Button";
import { PlanStep } from "../../molecules/PlanStep";
import { CreateStep } from "../../molecules/CreateStep";
import { GrowStep } from "../../molecules/GrowStep";
import {IProps} from "./types";
import * as S from "./styles";
import * as CF from "../../../config";

import {language} from "../../../language";

export default function EventsCreateStep(props: IProps) {
    const history = useHistory()

    function handleContinue() {
        history.push(props.continueUrl);
    }
    return (
        <S.Wrapper>
            <EventsCreateProgress activeStep={props.progressLabel}/>
        {props.progressLabel === 0 ? 
            <PlanStep
            title={language.basicInfo.header}
            fields={CF.CREATE.basicInfo.fields}
        ></PlanStep> : props.progressLabel === 1 ?
            <CreateStep
            title={language.basicInfo.header}
            fields={CF.CREATE.address.fields}
        ></CreateStep> : props.progressLabel === 2 ? 
            <GrowStep 
            title={language.basicInfo.header}
            fields={CF.CREATE.basicInfo.fields}
        ></GrowStep> : <h1>Summary</h1> }
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