import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

export const FlexContainer = styled.div`
    display: flex;
    margin-top: 20px;
    @media(max-width: ${SC.STYLING.cutoffSecondary}) {
        flex-direction: column;
    }
`;

export const Fields = styled.div`
    width: 30%;
    @media(max-width: ${SC.STYLING.cutoffSecondary}) {
        width: 100%;
    }
`;

export const CalendarContainer = styled.div`
    width: 70%;
    @media(max-width: ${SC.STYLING.cutoffSecondary}) {
        width: 100%;
    }
`;

export const Calendar = styled.div`
    width: 350px;
    margin: 10px 0 0 auto;
    @media(max-width: ${SC.STYLING.cutoffSecondary}) {
        margin: auto;
    }
`;