import React from "react";

import logo from "../../../assets/logo-title-primary.png";

import { Button } from "../../atoms/Button";
import { FormField } from "../../atoms/FormField";

import { language } from "../../../language";
import * as U from "../../../urls";
import * as S from "./styles";

export default function LogIn() {
    const [email, setEmail] = React.useState<string | null>(null);
    const [password, setPassword] = React.useState<string | null>(null);

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        console.log(email);
        console.log(password);
      }

    return (
        <S.Wrapper>
            <S.MainContainer>
                <S.HeaderContainer>
                    <S.HeaderLogo src={logo} />
                    <h1>{language.logInHeader}</h1>
                </S.HeaderContainer>
                <S.Form>
                    <S.FieldContainer>
                        <FormField
                            label={language.auth.contact.fields.email}
                            value={email || ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setEmail(e.target.value)
                            }
                        />
                    </S.FieldContainer>
                    <S.UContainer>

                    </S.UContainer>
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
                    <S.UContainer>

                    </S.UContainer>
                    <S.BottomContainer>
                        <a href={U.signUp}>Create Account</a>
                        <Button 
                            formSubmit={true}
                            label={"Log in"}
                            disabled={false}
                            loading={false}
                            type={"primary"}
                            handlePress={(e: React.SyntheticEvent) => handleSubmit(e)}
                        />
                    </S.BottomContainer>
                </S.Form>
            </S.MainContainer>
        </S.Wrapper>
    )
}