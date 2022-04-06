import styled from "styled-components";

import * as SC from "../../../styling-config";

export const TabsContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    width: 100%;
  }
`;
