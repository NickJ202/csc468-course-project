import React from 'react';
import {useDispatch} from 'react-redux';

import {FormField} from '../../../components/atoms/FormField';
import {AuthenticationStep} from '../../../components/organisms/AuthenticationStep';

import {paths} from '../../../paths';
import {language} from '../../../language';

import {savePartialUser} from '../../../redux/user/actions';

import {validateName} from '../../../util';

export default function SignUp_FullName_2({navigation}) {
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);

    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const handleLoading = (childLoading: boolean) => {
        setLoading(childLoading);
    }

    const invalidFieldCheck = () => {
        if (!firstName || !lastName) return true;
        if (firstName.length <= 0 && lastName.length <= 0) return true;
    }

    const handleContinue = (firstName: string, lastName: string) => {
        const firstNameValidation = validateName(firstName);
        const lastNameValidation = validateName(lastName);
        if (firstNameValidation.check && lastNameValidation.check) {
            dispatch(savePartialUser(
                null,
                null,
                firstName,
                lastName,
                null,
                null,
                null
            ));
            navigation.navigate(paths.authentication.components.signUp_Phone_3.name);
        } else {
            if (!firstNameValidation.check) {
                setErrorMessage(firstNameValidation.message)
            }
            if (!lastNameValidation.check) {
                setErrorMessage(lastNameValidation.message)
            }
            setModalVisible(true);
        }
    }

    return (
        <AuthenticationStep
            header={language.fullName}
            buttonLabel={language.continue}
            action={() => handleContinue(firstName, lastName)}
            modalVisible={modalVisible}
            errorMessage={errorMessage}
            handleModal={() => setModalVisible(false)}
            buttonDisabled={invalidFieldCheck() || loading}
            handleLoading={handleLoading}
        >
            <FormField
                placeholder={language.firstName}
                type={"default"}
                value={firstName}
                onChange={(text: string) => setFirstName(text)}
                secureTextEntry={false}
                autoFocus={false}
                autoCapitalize={"sentences"}
                textContentType={"none"}
                disabled={loading}
            />
            <FormField
                placeholder={language.lastName}
                type={"default"}
                value={lastName}
                onChange={(text: string) => setLastName(text)}
                secureTextEntry={false}
                autoFocus={false}
                autoCapitalize={"sentences"}
                textContentType={"none"}
                disabled={loading}
            />
        </AuthenticationStep>
    );
}