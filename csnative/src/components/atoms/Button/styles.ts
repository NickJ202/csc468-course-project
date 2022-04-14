import styled from 'styled-components/native';

type ButtonProps = {
    loading: boolean;
}

export const View = styled.View``;

export const Primary = styled.TouchableHighlight<ButtonProps>`
  background: ${props => props.disabled ?
          props.loading ? props.theme.colors.primary :
                  props.theme.colors.disabledBackground : props.theme.colors.primary};
  width: 85%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.buttonPrimary};
`;

export const Secondary = styled(Primary)`
  background: ${props => props.theme.colors.transparent};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const Tertiary = styled(Secondary)`
  background: ${props => props.theme.colors.transparent};
  border: none;
`;