import React from 'react';
import { useDispatch } from 'react-redux';

import { FormField } from '../../../components/atoms/FormField';
import { AuthenticationStep } from '../../../components/organisms/AuthenticationStep';

import { paths } from '../../../paths';
import { language } from '../../../language';

import { savePartialUser } from '../../../redux/user/actions';

import { formatPhoneNumberUS, validatePhoneNumber } from '../../../util';

export default function SignUp_Phone_3({ navigation }) {
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const handleLoading = (childLoading: boolean) => {
        setLoading(childLoading);
    }

    const invalidFieldCheck = () => {
        if (!phoneNumber) return true;
        if (phoneNumber.length <= 0) return true;
    }

    const handleContinue = () => {
        const phoneNumberValidation = validatePhoneNumber(phoneNumber);
        if (phoneNumberValidation.check) {
            dispatch(savePartialUser(
                null,
                null,
                null,
                null,
                formatPhoneNumberUS(phoneNumber),
                null,
                null
            ));
            navigation.navigate(paths.authentication.components.signUp_PhoneConfirm_4.name)
        }
        else {
            setErrorMessage(phoneNumberValidation.message);
            setModalVisible(true);
        }
    }

    return (
        <AuthenticationStep
            header={language.phoneNumber}
            buttonLabel={language.continue}
            action={() => handleContinue()}
            modalVisible={modalVisible}
            errorMessage={errorMessage}
            handleModal={() => setModalVisible(false)}
            buttonDisabled={invalidFieldCheck() || loading}
            handleLoading={handleLoading}
        >
            <FormField
                placeholder={language.phoneNumber}
                type={"numeric"}
                value={formatPhoneNumberUS(phoneNumber)}
                onChange={(text: string) => setPhoneNumber(text)}
                secureTextEntry={false}
                autoFocus={false}
                autoCapitalize={"none"}
                textContentType ={"none"}
            />
        </AuthenticationStep>
    );
}