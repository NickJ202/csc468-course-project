import styled from "styled-components";

export const Primary = styled.button`
  position: relative;
  background: ${(props) => props.theme.colors.button.primary.background};
  color: ${(props) => props.theme.colors.button.primary.label};
  &:hover {
    background: ${(props) => props.theme.colors.button.primary.hover};
  }
  &:disabled {
    background: ${(props) => props.theme.colors.button.primary.disabled};
  }
`;

export const Secondary = styled.button`
  position: relative;
  background: ${(props) => props.theme.colors.button.secondary.background};
  color: ${(props) => props.theme.colors.button.secondary.label};
  border: 1px solid ${(props) => props.theme.colors.border.primary};
  &:hover {
    background: ${(props) => props.theme.colors.button.secondary.hover};
  }
  &:disabled {
    color: ${(props) => props.theme.colors.button.secondary.labelDisabled};
    background: ${(props) => props.theme.colors.button.secondary.disabled};
  }
`;
