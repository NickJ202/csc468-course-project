import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media(max-width: ${SC.STYLING.cutoffInitial}) {
        flex-wrap: nowrap;
        flex-direction: column;
    }
`;

export const Section = styled.section`
    height: 50%;
    width: 50%;
    @media(max-width: ${SC.STYLING.cutoffInitial}) {
        height: auto;
    }
    border: 1px solid red;
`;

export const Section1 = styled(Section)`
    padding-right: 10px;
    @media(max-width: ${SC.STYLING.cutoffInitial}) {
        padding-right: 0;
    }
`;

export const Section2 = styled(Section)`
    padding-left: 10px;
    @media(max-width: ${SC.STYLING.cutoffInitial}) {
        padding-left: 0;
    }
`;

export const BasicInfo = styled(Section1)`
    min-height: 332.5px;
    width: 400px;
    @media(max-width: ${SC.STYLING.cutoffInitial}) {
        min-height: auto;
        width: 100%;
    }
`;

export const TimeFrame = styled(Section2)`
    min-height: 332.5px;
    width: calc(100% - 400px);
    @media(max-width: ${SC.STYLING.cutoffInitial}) {
        min-height: auto;
        width: 100%;
    }
`;

export const Location = styled(Section1)`
    width: 500px;
    @media(max-width: ${SC.STYLING.cutoffInitial}) {
        width: 100%;
    }
`;

export const CoverPhoto = styled(Section2)`
    width: calc(100% - 500px);
    @media(max-width: ${SC.STYLING.cutoffInitial}) {
        width: 100%;
    }
`;