import { useHistory } from "react-router-dom";

import { ProfileImage } from "../../../components/molecules/ProfileImage";
import { SignUpStep } from "../../../components/molecules/SignUpStep";

import * as U from "../../../urls";
import * as CF from "../../../config";

import { language } from "../../../language";

export default function OrgSignup() {
    const history = useHistory();

    function handleSubmit() {
        history.push(U.signUpContact);
    }

    return (
        <SignUpStep
            title={language.org}
            fields={CF.SIGNUP.org.fields}
            submitBtnLabel={language.continue}
            handleSubmit={handleSubmit}
        >
            <ProfileImage />
        </SignUpStep>
    );
}