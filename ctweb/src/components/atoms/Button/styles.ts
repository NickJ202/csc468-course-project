import styled from "styled-components";

export const Primary = styled.button`
  background: ${props => props.theme.colors.button.primary.background};
  color: ${props => props.theme.colors.button.primary.label};
  &:hover{
    cursor: pointer;
    background: ${props => props.theme.colors.button.primary.hover};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${props => props.theme.colors.button.primary.disabled};
  }
`;

export const Secondary = styled.button`
  background: ${props => props.theme.colors.button.secondary.background};
  color: ${props => props.theme.colors.button.secondary.label};
  border: 1px solid ${props => props.theme.colors.border.primary};
  &:hover{
    cursor: pointer;
    background: ${props => props.theme.colors.button.secondary.hover};
  }
`;