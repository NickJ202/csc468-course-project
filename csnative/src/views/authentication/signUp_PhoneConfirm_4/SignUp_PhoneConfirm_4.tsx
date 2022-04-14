import React from 'react';
import {useDispatch} from 'react-redux';

import {Text} from '../../../components/atoms/Text';
import {AuthenticationStep} from '../../../components/organisms/AuthenticationStep';

import {paths} from '../../../paths';
import {language} from '../../../language';

import * as GS from '../../../globalStyles';

import {useAppSelector} from '../../../hooks';

import {registerUser} from '../../../redux/user/actions';

export default function SignUp_PhoneConfirm_4({navigation}) {
    const {phoneNumber} = useAppSelector(state => state.userReducer);
    const user = useAppSelector(state => state.userReducer);

    const [loading, setLoading] = React.useState(false);

    const dispatch = useDispatch();

    const handleLoading = (childLoading: boolean) => {
        setLoading(childLoading);
    }

    const handleContinue = () => {
        // SEND TEXT FOR VERIFICATION SCREEN
        dispatch(registerUser(user));
        navigation.navigate(paths.authentication.components.signUp_PhoneVerify_5.name)
    }

    return (
        <AuthenticationStep
            spaceAround
            header={language.phoneNumberConfirm}
            buttonLabel={language.textMe}
            action={() => handleContinue()}
            handleLoading={handleLoading}
            buttonDisabled={loading}
        >
            <GS.View75P>
                <Text size={"base"} color={"primaryAlt"} centered>
                    {language.sixDigitCode}
                </Text>
            </GS.View75P>
            <Text size={"large"} color={"primary"} bold centered>
                {phoneNumber}
            </Text>
            <GS.View75P>
                <Text size={"small"} color={"primaryAlt"} centered>
                    {language.privacyPolicy}
                </Text>
            </GS.View75P>
        </AuthenticationStep>
    );
}