import React from 'react';

import { Text } from '../../../components/atoms/Text';
import { Button } from '../../../components/atoms/Button';

import * as S from './styles';
import * as GS from '../../../globalStyles';

import { paths } from '../../../paths';
import { language } from '../../../language';

export default function Landing({ navigation }) {
    const logo = require('../../../assets/logo-primary.png');

    const handleRedirect = (routeName: string) => navigation.navigate(routeName);

    return (
        <GS.View>
            <S.LogoSection>
                <S.LogoContainer>
                    <S.Logo source={logo} />
                </S.LogoContainer>
            </S.LogoSection>

            <S.TextSection>
                <S.TextContainer>
                    <S.HeaderText>
                        <Text size={"header"} color={"primary"} bold>
                            {language.welcomeHeader}
                        </Text>
                    </S.HeaderText>
                    <S.BodyText>
                        <Text size={"base"} color={"primaryAlt"}>
                            {language.welcomeBody}
                        </Text>
                    </S.BodyText>
                </S.TextContainer>
            </S.TextSection>

            <S.ButtonSection>
                <Button
                    type={"primary"}
                    label={language.signUp}
                    handlePress={() => handleRedirect(paths.authentication.components.signUp_EmailPassword_1.name)}
                    loading={false}
                    disabled={false}
                />
                <Button
                    type={"secondary"}
                    label={language.logIn}
                    handlePress={() => handleRedirect(paths.authentication.components.logIn.name)}
                    loading={false}
                    disabled={false}
                />
            </S.ButtonSection>
        </GS.View>
    );
}