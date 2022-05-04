import styled from "styled-components";

export const SectionTitle = styled.p`
  width: 100%;
  padding-bottom: 7.5px;
  color: ${(props) => props.theme.colors.font.secondary};
  font-size: ${(props) => props.theme.typography.size.small};
  font-weight: ${(props) => props.theme.typography.boldFontWeight};
`;
