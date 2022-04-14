import React, {Children} from 'react';
import {Keyboard, Platform} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

import {Text} from '../../../components/atoms/Text';
import {Modal} from '../../atoms/Modal';
import {Button} from '../../../components/atoms/Button';

import * as S from './styles';
import * as GS from '../../../globalStyles';
import * as I from './types';

import {language} from '../../../language';

export default function AuthenticationStep(props: I.IProps) {
    const logo = require('../../../assets/logo-primary.png');

    const iOS = Platform.OS === "ios";
    const [loading, setLoading] = React.useState(false);
    const handleAction = () => {
        Keyboard.dismiss();
        props.handleLoading(true);
        setLoading(true);
        setTimeout(() => {
            Promise.all([
                props.action()]).then(() => {
                props.handleLoading(false);
                setLoading(false);
            })
        }, 0);
    }
    const handleModal = () => {
        props.handleModal();
        props.handleLoading(false);
        setLoading(false);
    }

    return (
        <>
            <GS.KView
                behavior={iOS ? "padding" : "height"}
                keyboardVerticalOffset={iOS ? useHeaderHeight() + 0 : 0}
            >
                <S.Container>
                    <S.HeaderSection>
                        <S.HeaderContainer>
                            <S.HeaderText>
                                <Text size={"header"} color={"primary"} bold>
                                    {props.header}
                                </Text>
                            </S.HeaderText>
                        </S.HeaderContainer>
                    </S.HeaderSection>
                    <S.BodySection>
                        <S.BodyContainer spaceAround={props.spaceAround}>
                            {Children.map(props.children, (child) => {
                                return (
                                    <S.ChildContainer>
                                        {child}
                                    </S.ChildContainer>
                                )
                            })}
                        </S.BodyContainer>
                    </S.BodySection>
                    <S.ButtonSection>
                        <S.ButtonContainer>
                            <Button
                                label={props.buttonLabel}
                                type={"primary"}
                                handlePress={handleAction}
                                loading={loading}
                                disabled={props.buttonDisabled}
                            />
                        </S.ButtonContainer>
                    </S.ButtonSection>
                </S.Container>
            </GS.KView>
            {props.modalVisible &&
            <Modal
                visible={props.modalVisible}
                header={language.error}
                headerColor={"error"}
                message={props.errorMessage}
                buttonLabel={language.close}
                handleButtonAction={handleModal}
            />}
        </>
    )
}