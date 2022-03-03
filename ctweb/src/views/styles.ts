import styled from "styled-components";

import * as SC from "../styling-config";

export const SignUpView = styled.main`
  height: 100vh;
  width: 100vw;
`;

export const Spacer = styled.div`
  height: 2vh;
  width: 100%;
`;

export const View = styled.main`
  position: absolute;
  top: ${SC.STYLING.navHeight};
  left: ${SC.STYLING.navWidth};
  height: calc(100% - ${SC.STYLING.navHeight});
  width: calc(100% - ${SC.STYLING.navWidth});
  padding: 0;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    left: 0;
    width: 100vw;
    overflow-x: hidden;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1280px !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const HView = styled.div`
  height: ${SC.STYLING.viewHeaderHeight};
  width: 100%;
  display: flex;
  margin-bottom: ${SC.STYLING.viewHeaderPadding};
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    height: 100px;
    flex-direction: column;
  }
`;

export const HViewSection = styled.div`
  height: 100%;
  width: 50%;
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    height: auto;
    width: 100%;
  }
`;

export const HViewSectionEnd = styled(HViewSection)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    justify-content: center;
  }
`;

export const Portal = styled(HViewSectionEnd)`
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    margin-top: 25px;
  }
`;

export const BView = styled.div`
  min-height: calc(100% - ${SC.STYLING.viewHeaderHeight} - ${SC.STYLING.viewHeaderPadding});
  position: relative;
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    min-height: calc(100% - 100px - ${SC.STYLING.viewHeaderPadding});
  }
`;