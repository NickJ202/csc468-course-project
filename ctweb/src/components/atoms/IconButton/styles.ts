import styled from "styled-components";

export const IconButton = styled.button`
  height: 25px;
  width: 25px;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  border: 1px dashed ${props => props.theme.colors.transparent};

  svg {
    height: 100%;
    width: 100%;
    fill: ${props => props.theme.colors.icon.fill};

    &:hover {
      cursor: pointer;
      fill: ${props => props.theme.colors.icon.focus};
    }
  }
`;