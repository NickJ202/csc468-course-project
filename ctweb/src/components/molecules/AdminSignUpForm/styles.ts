import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
    height: 95%;
    width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.font.secondary};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 10px 0 20px 0;
`;

export const PContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`;

export const Info = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  @media(max-width: ${SC.STYLING.cutoffSecondary}) {
    width: 100%;
  }
`;