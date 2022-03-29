import { useDispatch, useSelector } from "react-redux";

import { AdminSignUpForm } from "../../../components/molecules/AdminSignUpForm";
import { SignUpStep } from "../../../components/organisms/SignUpStep";

import * as CF from "../../../config";
import { language } from "../../../language";
import { registerOrgRequest } from "../../../redux/org/actions";

import { RootState } from "../../../redux/store";

// { name: "identifier", label: language.signUp.contact.fields.identifier },

export default function ContactSignUp() {
    const dispatch = useDispatch();
    const orgData = useSelector((state: RootState) => state.orgCreateReducer);

    function handleSubmit() {
        console.log(orgData);
        dispatch(registerOrgRequest(orgData));
    }

    return (
        <SignUpStep
            title={language.contact}
            fields={CF.SIGNUP.contact.fields}
            submitBtnLabel={language.continue}
            handleSubmit={handleSubmit}
        >
            <AdminSignUpForm />
        </SignUpStep>
    )
}