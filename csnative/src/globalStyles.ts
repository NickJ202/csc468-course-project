import styled from 'styled-components/native';

import {theme} from './themes';

export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.viewBackground};
`;

export const KView = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${theme.colors.viewBackground};
`;

export const View75P = styled.View`
  width: 75%;
`;