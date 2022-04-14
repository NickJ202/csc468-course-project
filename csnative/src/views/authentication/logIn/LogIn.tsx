import React from 'react';

import { Button } from '../../../components/atoms/Button';
import { FormField } from '../../../components/atoms/FormField';
import { AuthenticationStep } from '../../../components/organisms/AuthenticationStep';

import { paths } from '../../../paths';
import { language } from '../../../language';

export default function LogIn({ navigation }) {
    /**************CHECK FOR USER****************/
    const [email, setEmail] = React.useState(null);
    /********************************************/
    const [password, setPassword] = React.useState(null);

    const [loading, setLoading] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const handleLoading = (childLoading: boolean) => {
        setLoading(childLoading);
    }

    const invalidFieldCheck = () => {
        if (!email || !password) return true;
        if (email.length <= 0 && password.length <= 0) return true;
    }

    const handleLogIn = () => {
        /* DISPATCH ACTION CHECK USER */
        const logInCheck = false;
        /*****************************/

        if (logInCheck) {
            alert("Log in")
        }
        else {
            setErrorMessage(language.invalidCredentials);
            setModalVisible(true);
        }
    }

    return (
        <AuthenticationStep
            header={language.welcomeBack}
            buttonLabel={language.logIn}
            action={() => handleLogIn()}
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
                textContentType={"oneTimeCode"}
                disabled={loading}
            />
            <Button
                type={"tertiary"}
                label={language.forgotPassword}
                handlePress={() => navigation.navigate(paths.authentication.components.forgotPassword_Email_1.name)}
                loading={false}
                disabled={loading}
            />
        </AuthenticationStep>
    );
}