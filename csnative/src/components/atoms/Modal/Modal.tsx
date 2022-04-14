import React from 'react';
import * as Haptics from 'expo-haptics';

import { Text } from '../Text';
import { Button } from '../Button';

import * as S from './styles';
import * as I from './types';

export default function Modal(props: I.IProps) {
    React.useEffect(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    })
    //TODO change color based on prop
    return (
        <S.Modal
            animationType={"fade"}
            transparent={true}
            visible={props.visible}
        >
            <S.Wrapper>
                <S.Container>
                    <S.Info>
                    <S.Header>
                        <Text size={"xLarge"} color={props.headerColor} bold centered>
                            {props.header}
                        </Text>
                    </S.Header>
                    <S.Message>
                        <Text size={"base"} color={"primaryAlt"} centered>
                            {props.message}
                        </Text>
                    </S.Message>
                    </S.Info>
                    <Button
                        type={"primary"}
                        label={props.buttonLabel}
                        handlePress={props.handleButtonAction}
                        loading={false}
                    />
                </S.Container>
            </S.Wrapper>
        </S.Modal>
    )
}