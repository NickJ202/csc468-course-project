import styled from 'styled-components/native';

export const LogoSection = styled.View`
  height: 35%;
  width: 100%;
`;

export const LogoContainer = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  resize-mode: contain;
`;

export const TextSection = styled.View`
  height: 45%;
  width: 100%;
`;

export const TextContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: ${props => props.theme.colors.fontPrimary};
  text-align: center;
  margin-top: 40px;
`;

export const BodyText = styled.Text`
  color: ${props => props.theme.colors.fontPrimaryAlt};
  text-align: center;
  margin-top: 20px;
`;

export const ButtonSection = styled.View`
  height: 20%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 15px;
`;