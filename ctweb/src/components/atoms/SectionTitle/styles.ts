import styled from "styled-components";

export const SectionTitle = styled.p`
  width: 100%;
  padding-bottom: 2.5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};
  color: ${(props) => props.theme.colors.font.secondary};
  font-size: ${(props) => props.theme.typography.size.small};
`;
