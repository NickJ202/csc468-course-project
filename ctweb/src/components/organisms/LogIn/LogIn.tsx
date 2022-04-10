import React from "react";

import logo from "../../../assets/logo-title-primary.png";

import { Button } from "../../atoms/Button";
import { FormField } from "../../atoms/FormField";

import { validateEmail } from "../../../validations";

import { language } from "../../../language";
import * as U from "../../../urls";
import * as S from "./styles";
import { IProps } from "./types";

export default function LogIn(props: IProps) {
    const [email, setEmail] = React.useState<string | null>(null);
    const [password, setPassword] = React.useState<string | null>(null);

    const [invalidEmail, setInvalidEmail] = React.useState<string | null>(null);

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        if (email && password) {
            props.handleSubmit(email, password);
        }
    }

    React.useEffect(() => {
        if (email && email.length > 0 && !validateEmail(email)) {
            setInvalidEmail(language.enterValidEmail);
        }
        else {
            setInvalidEmail(null);
        }
    }, [email])

    function checkSubmitDisabled() {
        if (email && password) {
            if (email.length <= 0 || password.length <= 0) {
                return true;
            }
            else {
                if (!validateEmail(email)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            return true;
        }
    }

    return (
        <S.Wrapper>
            <S.MainContainer>
                <S.HeaderContainer>
                    <S.HeaderLogo src={logo} />
                    <h1>{language.logInHeader}</h1>
                </S.HeaderContainer>
                <S.Form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
                    <S.FieldContainer>
                        <FormField
                            label={language.auth.contact.fields.email}
                            value={email || ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                            error={invalidEmail}
                        />
                    </S.FieldContainer>
                    <S.FieldContainer>
                        <FormField
                            type={"password"}
                            label={language.auth.contact.fields.password}
                            value={password || ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                            }
                        />
                    </S.FieldContainer>
                    <S.BottomContainer>
                        <S.LinkContainer>
                            <a href={U.signUp}>Create Account</a>
                        </S.LinkContainer>
                        <S.SubmitContainer>
                            <Button
                                formSubmit={true}
                                label={language.logIn}
                                disabled={checkSubmitDisabled() || props.loading}
                                loading={props.loading}
                                type={"primary"}
                                handlePress={(e: React.SyntheticEvent) => handleSubmit(e)}
                            />
                        </S.SubmitContainer>
                    </S.BottomContainer>
                </S.Form>
            </S.MainContainer>
        </S.Wrapper>
    )
}