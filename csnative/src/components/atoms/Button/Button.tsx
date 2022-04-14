import React from 'react';
import {ActivityIndicator} from 'react-native';
import * as Haptics from 'expo-haptics';

import {Text} from '../Text';

import * as S from './styles';
import * as I from './types';

import {theme} from '../../../themes';
import {FontColorType} from "../../../types";

export default function Button(props: I.IProps) {

    const buttonStyle = getType();

    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).then(() => props.handlePress());
    }

    function getType() {
        let buttonObj: {
            wrapper: any,
            underlayColor: string,
            color: FontColorType,
            loaderColor: string,
            disabledColor: FontColorType
        };
        switch (props.type) {
            case "secondary":
                buttonObj = {
                    wrapper: S.Secondary,
                    underlayColor: theme.colors.buttonUnderlaySecondary,
                    color: "primary",
                    loaderColor: theme.colors.fontPrimary,
                    disabledColor: "placeholder"
                }
                return buttonObj;
            case "tertiary":
                buttonObj = {
                    wrapper: S.Tertiary,
                    underlayColor: theme.colors.transparent,
                    color: "secondaryAlt",
                    loaderColor: theme.colors.fontSecondaryAlt,
                    disabledColor: "placeholder"
                }
                return buttonObj;
            default:
                buttonObj = {
                    wrapper: S.Primary,
                    underlayColor: theme.colors.buttonUnderlayPrimary,
                    color: "secondary",
                    loaderColor: theme.colors.fontSecondary,
                    disabledColor: "secondary"
                }
                return buttonObj;
        }
    }

    const label = () => {
        return props.loading ?
            (
                <S.View>
                    <ActivityIndicator size="small" color={theme.colors.fontSecondary}/>
                </S.View>
            ) :
            (
                <S.View>
                    <Text
                        bold
                        size={"small"}
                        color={
                            props.disabled ?
                                buttonStyle.disabledColor : buttonStyle.color}
                    >
                        {props.label}
                    </Text>
                </S.View>
            )
    }

    const StyledButton = buttonStyle.wrapper;

    return (
        <StyledButton
            loading={props.loading}
            disabled={props.disabled}
            underlayColor={buttonStyle.underlayColor}
            onPress={handlePress}
        >
            {label()}
        </StyledButton>
    );
};