import styled from "styled-components";

import { IStyleProps } from "../../../types";

export const EmailClosed = styled.button<IStyleProps>`
  height: 100%;
  width: 135px;
  position: relative;
  background: ${(props) =>
    props.active
      ? props.theme.colors.container.primary.hover
      : props.theme.colors.container.primary.background};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.container.primary.hover};
  }
`;

export const ClosedCenterContainer = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  display: flex;
  justify-content: space-around;
  margin-top: 3.5px;
`;

export const Icon = styled.div<IStyleProps>`
  height: 22.5px;
  width: 22.5px;
  svg {
    height: 100%;
    width: 100%;
    fill: ${(props) =>
      props.active
        ? props.theme.colors.font.active
        : props.theme.colors.icon.fill};
  }
`;

export const FormattedEmail = styled.p<IStyleProps>`
  color: ${(props) =>
    props.active
      ? props.theme.colors.font.active
      : props.theme.colors.font.primary};
`;

export const ChevronIcon = styled(Icon)<IStyleProps>`
  margin-top: -1.5px;
  transform: rotate(${(props) => (props.active ? "180deg" : "0deg")});
`;

export const AccountBodyContainer = styled.div`
  width: 360px;
  background: ${(props) => props.theme.colors.container.primary.background};
  position: absolute;
  right: 0;
  border: 1px solid ${(props) => props.theme.colors.border.primary};
  padding: 20px;
`;

export const BodyTopContainer = styled.div`
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BodyBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Email = styled.p`
  max-width: 75%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.font.secondary};
`;

export const LinkContainer = styled.li`
  margin-top: 10px;
`;

export const LogOut = styled.button`
  color: ${(props) => props.theme.colors.font.active};
  font-weight: ${(props) => props.theme.typography.boldFontWeight};
  height: auto;
  width: auto;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
