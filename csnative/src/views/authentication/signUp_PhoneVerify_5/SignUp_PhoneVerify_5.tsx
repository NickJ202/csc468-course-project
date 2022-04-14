import React from 'react';
import { useDispatch } from 'react-redux';

import { Text } from '../../../components/atoms/Text';
import { Button } from '../../../components/atoms/Button';
import { FormField } from '../../../components/atoms/FormField';
import { AuthenticationStep } from '../../../components/organisms/AuthenticationStep';

import { paths } from '../../../paths';
import { language } from '../../../language';

import * as GS from '../../../globalStyles';

import { useAppSelector } from '../../../hooks';
import { UserVerify } from '../../../redux/types';
import { verifyUser } from '../../../redux/user/actions';

export default function SignUp_PhoneVerify_5({ navigation }) {
    const [code, setCode] = React.useState(null);

    const { phoneNumber } = useAppSelector(state => state.userReducer);
    const user = useAppSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const handleLoading = (childLoading: boolean) => {
        setLoading(childLoading);
    }

    const invalidFieldCheck = () => {
        if (!code) return true;
        if (code.length <= 0) return true;
    }

    const handleContinue = () => {
        var userV: UserVerify = {
            email: user.email,
            activation_code: code,
        }
        dispatch(verifyUser(userV));
        const sentCode = "182736"
        if (code === sentCode) {
            navigation.navigate(paths.authentication.components.signUp_Success_6.name)
        }
        else {
            setErrorMessage(language.invalidCode);
            setModalVisible(true);
        }
    }

    const handleResend = () => {
        alert("Resend text")
    }

    return (
        <AuthenticationStep
            spaceAround
            header={language.phoneNumberVerify}
            buttonLabel={language.continue}
            action={() => handleContinue()}
            modalVisible={modalVisible}
            errorMessage={errorMessage}
            handleModal={() => setModalVisible(false)}
            handleLoading={handleLoading}
            buttonDisabled={invalidFieldCheck() || loading}
        >
            <GS.View75P>
                <Text size={"base"} color={"primaryAlt"} centered>
                    {language.phoneNumberVerifySent}
                </Text>
            </GS.View75P>
            <Text size={"large"} color={"primary"} bold centered>
                {phoneNumber}
            </Text>
            <FormField
                placeholder={language.phoneNumberVerifyPlaceholder}
                type={"numeric"}
                value={code}
                onChange={(text: string) => setCode(text)}
                secureTextEntry={false}
                autoFocus={false}
                autoCapitalize={"none"}
                textContentType={"oneTimeCode"}
            />
            <Button
                type={"tertiary"}
                label={language.resend}
                handlePress={() => handleResend()}
                loading={false}
                disabled={false}
            />
        </AuthenticationStep>
    );
}