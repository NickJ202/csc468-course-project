import React from 'react';

import { Text } from '../Text';

import * as S from './styles';
import * as I from './types';

import { theme } from '../../../themes';

import { KeyboardAppearanceType } from '../../../types';

export default function FormField(props: I.IProps) {
  const keyboardAppearance: KeyboardAppearanceType = theme.colors.keyboardAppearance as KeyboardAppearanceType;
  const hasHelpText = props.helpText ? true : false;
  const [focused, setFocused] = React.useState(false);

  return (
    <S.Wrapper disabled={props.disabled} hasHelpText={hasHelpText} focused={focused}>
      <S.Container disabled={props.disabled} hasHelpText={hasHelpText} focused={focused}>
        <S.FormField
          editable={!props.disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={theme.colors.placeHolderText}
          selectionColor={theme.colors.primary}
          autoCorrect={false}
          autoCapitalize={props.autoCapitalize}
          autoFocus={props.autoFocus}
          keyboardType={props.type}
          keyboardAppearance={keyboardAppearance}
          secureTextEntry={props.secureTextEntry}
          // TODO autoComplete={"off"} SET FOR ANDROID
          textContentType={props.textContentType}
        />
      </S.Container>
      { props.helpText && 
        <S.TextContainer>
          <Text size={"xSmall"} color={"placeholder"} bold centered>
            {props.helpText}
          </Text>
        </S.TextContainer>
      }
    </S.Wrapper>
  );
};