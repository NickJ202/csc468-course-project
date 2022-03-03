import { SignUpStep } from "../../../components/molecules/SignUpStep";

import * as CF from "../../../config";

import { language } from "../../../language";

export default function ContactSignUp() {

    function handleSubmit() {
        console.log("submit")
    }

    return (
        <SignUpStep
            title={language.contact}
            fields={CF.SIGNUP.contact.fields}
            submitBtnLabel={language.continue}
            handleSubmit={handleSubmit}
        />
    )
}