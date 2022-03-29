import React from "react";
import { useDispatch } from "react-redux";

import { FormField } from "../../atoms/FormField";

import * as S from "./styles";

import { language } from "../../../language";

import { storePartialOrg } from "../../../redux/org/actions";

export default function AdminSignUpForm() {
    const dispatch = useDispatch();
    const [identifer, setIdentifier] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>("");
    React.useEffect(() => {
        dispatch(
            storePartialOrg(
                {
                    name: null,
                    address1: null,
                    locality: null,
                    administrativeArea: null,
                    postalCode: null,
                    country: null,
                    firstName: null,
                    lastName: null,
                    identifier: identifer,
                    password: password,
                    passwordConfirm: passwordConfirm,
                    phoneNumber: null,

                }
            )
        )
    }, [identifer, password, passwordConfirm, dispatch])
    return (
        <S.Wrapper>
            <S.Title>
                {language.logInInfo}
            </S.Title>
            <S.Content>
                <FormField
                    label={language.signUp.contact.fields.identifier}
                    value={identifer}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIdentifier(e.target.value)}
                />
                <S.PContent>
                    <FormField
                        type={"password"}
                        label={language.signUp.contact.fields.password}
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <FormField
                        type={"password"}
                        label={language.signUp.contact.fields.passwordConfirm}
                        value={passwordConfirm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
                    />
                </S.PContent>
            </S.Content>
            <S.Info>
                <span>
                    {language.adminSignUpInfo}
                </span>
            </S.Info>
        </S.Wrapper>
    )
}