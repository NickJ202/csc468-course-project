import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AdminSignUpForm } from "../../../components/molecules/AdminSignUpForm";
import { SignUpStep } from "../../../components/organisms/SignUpStep";

import * as CF from "../../../config";
import { language } from "../../../language";
import { registerOrgRequest } from "../../../redux/org/actions";

import { RootState } from "../../../redux/store";

export default function ContactSignUp() {
  const dispatch = useDispatch();
  const orgCreateData = useSelector(
    (state: RootState) => state.orgCreateReducer
  );

  const [loading, setLoading] = React.useState<boolean>(false);

  // Make async / await
  function handleSubmit() {
    setLoading(true);
    Promise.all([dispatch(registerOrgRequest(orgCreateData))])
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }

  return (
    <SignUpStep
      title={language.contact}
      fields={CF.SIGNUP.contact.fields}
      submitBtnLabel={language.submit}
      handleSubmit={handleSubmit}
      loading={loading}
      backButton
    >
      <AdminSignUpForm />
    </SignUpStep>
  );
}
