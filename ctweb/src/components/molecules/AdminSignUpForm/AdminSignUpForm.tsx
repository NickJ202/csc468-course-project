import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormField } from "../../atoms/FormField";

import { validateEmail } from "../../../validations";

import { language } from "../../../language";
import * as S from "./styles";

import { storePartialOrg } from "../../../redux/org/actions";
import { RootState } from "../../../redux/store";

export default function AdminSignUpForm() {
  const dispatch = useDispatch();
  const orgCreateData = useSelector(
    (state: RootState) => state.orgCreateReducer
  );
  const [email, setEmail] = React.useState<string | null>(
    orgCreateData.admin.email || null
  );
  const [password, setPassword] = React.useState<string | null>(
    orgCreateData.admin.password || null
  );
  const [passwordConfirm, setPasswordConfirm] = React.useState<string | null>(
    null
  );

  const [invalidEmail, setInvalidEmail] = React.useState<string | null>(null);

  React.useEffect(() => {
    // const validEmail = email && email.length > 0 && validateEmail(email);
    if (email && email.length > 0 && !validateEmail(email)) {
      setInvalidEmail(language.enterValidEmail);
    }
    else {
      setInvalidEmail(null);
      dispatch(
        storePartialOrg({
          email: email,
          password: password,
        })
      );
      // if (validEmail && password && passwordConfirm) {
      //   if (password === passwordConfirm) {
          
      //   }
      //   else {
      //     alert("Passwords dont match")
      //   }
      // }
    }
  }, [email, password, passwordConfirm, dispatch]);
  return (
    <S.Wrapper>
      <S.Title>{language.logInInfo}</S.Title>
      <S.Content>
        <FormField
          label={language.auth.contact.fields.email}
          value={email || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          error={invalidEmail}
        />
        <S.PContent>
          <FormField
            type={"password"}
            label={language.auth.contact.fields.password}
            value={password || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <FormField
            type={"password"}
            label={language.auth.contact.fields.passwordConfirm}
            value={passwordConfirm || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordConfirm(e.target.value)
            }
          />
        </S.PContent>
      </S.Content>
      <S.Info>
        <span>{language.adminSignUpInfo}</span>
      </S.Info>
    </S.Wrapper>
  );
}
