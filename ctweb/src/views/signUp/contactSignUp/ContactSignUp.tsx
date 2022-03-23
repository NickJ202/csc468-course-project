import { useDispatch, useSelector } from "react-redux";

import { SignUpStep } from "../../../components/molecules/SignUpStep";

import * as CF from "../../../config";
import { language } from "../../../language";
import { registerOrgRequest } from "../../../redux/org/actions";

import { RootState } from "../../../redux/store";

export default function ContactSignUp() {
    const dispatch = useDispatch();
    const orgData = useSelector((state: RootState) => state.orgReducer);

    function handleSubmit() {
        dispatch(registerOrgRequest(orgData));
    }

    return (
        <SignUpStep
            title={language.contact}
            fields={CF.SIGNUP.contact.fields}
            submitBtnLabel={language.continue}
            handleSubmit={handleSubmit}
        >
            <p>Admin Contact</p>
        </SignUpStep>
    )
}