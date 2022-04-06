import styled from "styled-components";

import { IStyleProps } from "../../../types";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Breadcrumb = styled.div`
  height: 100%;
  display: flex;
`;

export const Label = styled.h2<IStyleProps>`
  cursor: ${(props) => (props.disabled ? "text" : "pointer")};
`;

export const Link = styled.a<IStyleProps>`
  margin-right: 10px;
  font-size: inherit;
  font-weight: ${(props) =>
    props.active ? "inherit" : props.theme.typography.regularFontWeight};
  color: ${(props) =>
    props.active
      ? props.theme.colors.font.secondary
      : props.theme.colors.font.primary};
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  &:hover {
    color: ${(props) => props.theme.colors.font.secondary};
  }
`;

export const Separator = styled.span`
  cursor: default;
  margin-right: 10.5px;
  font-size: ${(props) => props.theme.typography.size.h2};
  color: ${(props) => props.theme.colors.font.primary};
`;
