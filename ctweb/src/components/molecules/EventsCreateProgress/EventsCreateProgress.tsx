import {PortalHandler} from "../../../handlers/PortalHandler";

import {IProps} from "./types";
import * as S from "./styles";

import * as C from "../../../config";

export default function EventsCreateProgress(props: IProps) {
    return (
        <PortalHandler domNode={C.DOM.viewHeader}>
            <S.Wrapper>
                {C.URLS.eventsCreate.map((elem, index, arr) => (
                    <S.Flex key={index}>
                        <S.Step
                            active={(props.activeStep + 1) === (elem.index + 1)}
                            completed={elem.index < props.activeStep}
                        >
                            <S.StepInfo
                                active={(props.activeStep + 1) === (elem.index + 1)}
                                completed={elem.index < props.activeStep}
                            >
                                <b>
                                    {elem.index < props.activeStep ? "✓" : elem.index + 1}
                                </b>
                            </S.StepInfo>
                        </S.Step>
                        {!(arr.length - 1 === index) &&
                        <S.Separator/>
                        }
                    </S.Flex>
                ))}
            </S.Wrapper>
        </PortalHandler>
    );
}