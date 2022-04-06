import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
  max-height: 500px;
  width: 75%;
  max-width: 640px;
  margin: auto;
  padding-top: 20px;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    width: 75%;
  }
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    width: 100%;
    max-height: none;
  }
`;

export const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: auto;
  padding: 20px;
`;

export const Header = styled.h1`
  text-align: center;
`;

export const Image = styled.img`
  width: 115px;
`;

export const Info = styled.p`
  text-align: center;
`;
