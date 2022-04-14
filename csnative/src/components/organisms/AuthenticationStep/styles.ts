import styled from 'styled-components/native';

type BodyContainerProps = {
    spaceAround: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const HeaderSection = styled.View`
  flex: 0.15;
`;

export const HeaderContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  text-align: center;
`;

export const BodySection = styled.View`
  flex: 0.65;
  width: 100%;
`;

export const BodyContainer = styled.View<BodyContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  align-items: center;
  justify-content: ${props => props.spaceAround ?
          `space-around` : `center`};
`;

export const ButtonSection = styled.View`
  flex: 0.2;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`;

export const ChildContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 20px;
`;