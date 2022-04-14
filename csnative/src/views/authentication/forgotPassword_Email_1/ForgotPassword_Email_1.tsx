import React from 'react';
// import { useDispatch } from 'react-redux';

import { Text } from '../../../components/atoms/Text';
// import { Button } from '../../../components/atoms/Button';
import { FormField } from '../../../components/atoms/FormField';
import { AuthenticationStep } from '../../../components/organisms/AuthenticationStep';

// import { paths } from '../../../paths';
import { language } from '../../../language';

// import { savePartialUser } from '../../../redux/user/actions';

import { validateEmail } from '../../../util';

import * as GS from '../../../globalStyles';

export default function ForgotPassword_Email_1({ navigation }) {
    const [email, setEmail] = React.useState(null);

    // const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const handleLoading = (childLoading: boolean) => {
        setLoading(childLoading);
    }

    const invalidFieldCheck = () => {
        if (!email) return true;
        if (email.length <= 0) return true;
    }

    const handleContinue = (email: string) => {
        const emailValidation = validateEmail(email);
        if (emailValidation.check) {
            // DISPATCH RESET PASSWORD
            // dispatch(savePartialUser(email, password, null, null, null));
            alert("Reset password")
            // navigation.navigate(paths.authentication.components.signUp_FullName_2.name);
        }
        else {
            if (!emailValidation.check) {
                setErrorMessage(emailValidation.message);
            }
            setModalVisible(true);
        }
    }

    return (
        <AuthenticationStep
            header={language.resetPassword}
            buttonLabel={language.sendEmail}
            action={() => handleContinue(email)}
            modalVisible={modalVisible}
            errorMessage={errorMessage}
            handleModal={() => setModalVisible(false)}
            buttonDisabled={invalidFieldCheck() || loading}
            handleLoading={handleLoading}
        >
            <GS.View75P>
                <Text size={"base"} color={"primaryAlt"} centered>
                    {language.resetPasswordInstructions}
                </Text>
            </GS.View75P>
            <FormField
                placeholder={language.email}
                type={"email-address"}
                value={email}
                onChange={(text: string) => setEmail(text)}
                secureTextEntry={false}
                autoFocus={false}
                autoCapitalize={"none"}
                textContentType={"none"}
                disabled={loading}
            />
        </AuthenticationStep>
    );
}