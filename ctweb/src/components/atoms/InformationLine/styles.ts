import styled from "styled-components";

export const ILContainer = styled.div`
  height: 20px;
  display: flex;
`;

export const Label = styled.span`
  color: ${(props) => props.theme.colors.font.primary};
  margin: auto 0px auto 0px;
`;

export const Colon = styled.span`
  margin: auto 0px auto 0px;
`;

export const Data = styled.span`
  color: ${(props) => props.theme.colors.font.secondary};
  font-weight: ${(props) => props.theme.typography.boldFontWeight};
  margin: auto 0px auto 0px;
`;

export const EndText = styled.span`
  color: ${(props) => props.theme.colors.font.secondary};
  font-weight: ${(props) => props.theme.typography.boldFontWeight};
  margin: auto 0px auto 0px;
`;

export const FlexRow = styled.div`
  display: flex;
`;