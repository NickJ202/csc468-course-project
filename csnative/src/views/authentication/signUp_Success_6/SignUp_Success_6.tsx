import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '../../../components/atoms/Text';
import { AuthenticationStep } from '../../../components/organisms/AuthenticationStep';

import { theme } from '../../../themes';
import { language } from '../../../language';

import * as GS from '../../../globalStyles';

export default function SignUp_Success_6({ navigation }) {
    const [loading, setLoading] = React.useState(false);

    const handleLoading = (childLoading: boolean) => {
        setLoading(childLoading);
    }

    const handleContinue = () => {
        alert("Signup complete")
    }

    return (
        <AuthenticationStep
            spaceAround
            header={language.signUpSuccess}
            buttonLabel={language.finish}
            action={() => handleContinue()}
            handleLoading={handleLoading}
            buttonDisabled={loading}
        >
            <Ionicons name="md-happy-outline" size={150} color={theme.colors.primary} />
            
            <GS.View75P>
                <Text size={"base"} centered color={"primaryAlt"}>
                    {language.phoneNumberVerified}
                </Text>
            </GS.View75P>
        </AuthenticationStep>
    );
}