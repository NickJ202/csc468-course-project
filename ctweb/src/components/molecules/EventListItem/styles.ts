import styled from "styled-components";

import { STYLING } from "../../../styling-config";

export const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    background: ${(props) => props.theme.colors.container.primary.background};
    margin-bottom: 25px;
    padding: 15px;
`;

export const Title = styled.p`
    color: ${(props) => props.theme.colors.font.active};
`;

export const Divider = styled.div`
  width: 100%;
  margin: 15px 0px 15px 0px;
  border-top: 1px solid ${props => props.theme.colors.border.primary};
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  @media (max-width: ${STYLING.cutoffSecondary}) {
    flex-direction: column;
  }
`;

export const DividerVertical = styled.div`
  height: 20px;
  width: 1px;
  margin: 0px 20px 0px 20px;
  border-right: 1px solid ${props => props.theme.colors.border.primary};
  @media (max-width: ${STYLING.cutoffSecondary}) {
    border: none;
  }
`;