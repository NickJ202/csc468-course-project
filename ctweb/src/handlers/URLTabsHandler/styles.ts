import styled from "styled-components";
import * as SC from "../../styling-config";

import { IStyleProps } from "../../types";

export const Container = styled.div`
  height: 100%;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    height: auto;
    min-height: 300px;
  }
`;

export const List = styled.ol`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};
`;

export const Content = styled.div`
  height: 90%;
`;

export const Tab = styled.li<IStyleProps>`
  margin: 0;
  font-weight: ${(props) => props.theme.typography.boldFontWeight};
  color: ${(props) =>
    props.active
      ? props.theme.colors.font.secondary
      : props.theme.colors.font.active};
  border-bottom: 2px solid
    ${(props) =>
      props.active
        ? props.theme.colors.tab.active.border
        : props.theme.colors.transparent};
  cursor: pointer;
  padding: 10.5px 15px 9.5px 15px;
  background: ${(props) =>
    props.active
      ? props.theme.colors.tab.active.background
      : props.theme.colors.transparent};

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.font.active};
    background: ${(props) => props.theme.colors.tab.active.background};
  }
`;

export const View = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
