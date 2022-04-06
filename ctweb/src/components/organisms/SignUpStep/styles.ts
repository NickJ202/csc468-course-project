import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
  height: 680px;
  width: 1200px;
  max-width: 98.5vw;
  margin: 0 auto;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    height: auto;
  }
`;

export const HContainer = styled.div`
  height: 60px;
  width: 100%;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 160px;
`;

export const BContainer = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  padding: 20px;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
`;

export const StepWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background: ${(props) => props.theme.colors.container.primary.background};
  border: 1px solid ${(props) => props.theme.colors.border.primary};
  border-radius: 5px;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    flex-direction: column;
    padding: 40px;
  }
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    padding: 20px;
  }
`;

export const SubStep = styled.div`
  height: 100%;
  width: 45%;
  position: relative;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    width: 100%;
  }
`;

export const FieldsHeader = styled.h1`
  height: 40px;
`;

export const Fields = styled.div`
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SubmitWrapper = styled.div`
  height: ${SC.STYLING.buttonHeight};
  width: 100%;
  position: absolute;
  bottom: 0;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    position: relative;
  }
`;

export const SubmitContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Children = styled.div`
  height: calc(100% - ${SC.STYLING.buttonHeight});
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    margin: 75px 0;
  }
`;

export const ChildContainer = styled.div`
  height: 100%;
  width: 100%;
`;
