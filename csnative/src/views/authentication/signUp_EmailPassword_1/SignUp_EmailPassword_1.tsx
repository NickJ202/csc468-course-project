import React from 'react';
import {useDispatch} from 'react-redux';

import {Button} from '../../../components/atoms/Button';
import {FormField} from '../../../components/atoms/FormField';
import {AuthenticationStep} from '../../../components/organisms/AuthenticationStep';

import {paths} from '../../../paths';
import {language} from '../../../language';

import {savePartialUser} from '../../../redux/user/actions';

import {validateEmail, validatePassword} from '../../../util';

export default function SignUp_EmailPassword_1({navigation}) {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const handleLoading = (childLoading: boolean) => {
        setLoading(childLoading);
    }

    const invalidFieldCheck = () => {
        if (!email || !password) return true;
        if (email.length <= 0 && password.length <= 0) return true;
        if (!validatePassword(password).check) return true;
    }

    const handleContinue = (email: string, password: string) => {
        const emailValidation = validateEmail(email);
        const passwordValidation = validatePassword(password);
        if (emailValidation.check && passwordValidation.check) {
            // DISPATCH TO STORE
            dispatch(savePartialUser(
                email,
                password,
                null,
                null,
                null,
                null,
                null
            ));
            navigation.navigate(paths.authentication.components.signUp_FullName_2.name);
        } else {
            if (!emailValidation.check) {
                setErrorMessage(emailValidation.message);
            }
            setModalVisible(true);
        }
    }

    return (
        <AuthenticationStep
            header={language.emailPassword}
            buttonLabel={language.continue}
            action={() => handleContinue(email, password)}
            modalVisible={modalVisible}
            errorMessage={errorMessage}
            handleModal={() => setModalVisible(false)}
            buttonDisabled={invalidFieldCheck() || loading}
            handleLoading={handleLoading}
        >
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
            <FormField
                placeholder={language.password}
                type={"default"}
                value={password}
                onChange={(text: string) => setPassword(text)}
                secureTextEntry={true}
                autoFocus={false}
                autoCapitalize={"none"}
                textContentType={"none"}
                helpText={language.passwordRequirements}
                disabled={loading}
            />

            <Button
                type={"tertiary"}
                label={language.alreadyHaveAccount}
                handlePress={() => navigation.navigate(paths.authentication.components.logIn.name)}
                loading={loading}
                disabled={loading}
            />
        </AuthenticationStep>
    );
}