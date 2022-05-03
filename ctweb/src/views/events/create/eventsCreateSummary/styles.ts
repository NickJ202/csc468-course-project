import styled from "styled-components";

import * as SC from "../../../../styling-config";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const MainContainer = styled.div`
    height: 500px;
    max-height: 700px;
    overflow-y: auto;
    width: 450px;
    max-width: 95vw;
    background: ${(props) => props.theme.colors.container.primary.background};
    border: 1px solid ${(props) => props.theme.colors.border.primary};
    border-radius: ${SC.STYLING.borderRadius};
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media(max-width: ${SC.STYLING.cutoffSecondary}) {
      width: auto;
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);
    }
`;

export const HeaderContainer = styled.div`
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;

export const BodyContainer = styled.div`
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  @media(max-width: ${SC.STYLING.cutoffSecondary}) {
    padding: 25px 15px;
  }
`;