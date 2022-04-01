import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  @media(max-width: ${SC.STYLING.cutoffSecondary}) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media(max-width: ${SC.STYLING.cutoffSecondary}) {
    margin: 0 auto;
    > * {
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 130px;
  width: 130px;
  border: 1px dashed ${props => props.theme.colors.border.secondary};
  border-radius: 50%;
  @media(max-width: ${SC.STYLING.cutoffSecondary}) {
    margin: 0 auto 50px auto;
  }
`;

export const Info = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  @media(max-width: ${SC.STYLING.cutoffSecondary}) {
    width: 100%;
  }
`;