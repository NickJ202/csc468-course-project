import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const Section = styled.section`
  height: 50%;
  width: 50%;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    height: auto;
  }
`;

export const Section1 = styled(Section)`
  padding-right: 25px;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    padding-right: 0;
    margin-bottom: 50px;
  }
`;

export const Section2 = styled(Section)`
  padding: 0 25px;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    padding: 0;
    margin-bottom: 50px;
  }
`;

export const BasicInfo = styled(Section1)`
  min-height: 400px;
  width: 400px;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    min-height: auto;
    width: 100%;
  }
`;

export const TimeFrame = styled(Section2)`
  min-height: 400px;
  width: calc(100% - 400px);
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    min-height: auto;
    width: 100%;
  }
`;

export const Location = styled(Section1)`
  width: 400px;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    width: 100%;
  }
`;

export const Participants = styled(Section2)`
  width: calc(100% - 400px);
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    width: 100%;
  }
`;
