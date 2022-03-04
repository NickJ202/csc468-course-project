import React from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../../assets/logo-title-primary.png";

import { Button } from "../../atoms/Button";
import { FormField } from "../../atoms/FormField";

import { storePartialOrg } from "../../../redux/org/actions";

import { IProps, IFields } from "./types";
import * as S from "./styles";

import { RootState } from "../../../redux/store";

export default function SignUpStep(props: IProps) {
    const dispatch = useDispatch();
    const orgData = useSelector((state: RootState) => state.orgReducer);
    const [formState, setFormState] = React.useState<any>(undefined);

    React.useEffect(() => {
        if (!formState) {
            let fields: IFields = {};
            for (const field of props.fields) {
                fields[field.name] = {
                    value: orgData[field.name],
                    invalid: false
                }
            }
            setFormState(fields)
        }
    }, [orgData, formState, props.fields]);

    function handleChange(name: string, e: React.ChangeEvent<HTMLInputElement>) {
        let fields = { ...formState };
        fields[name].value = e.target.value;
        setFormState(fields);
        let orgData: any = {};
        for (const field in fields) {
            orgData[field] = fields[field].value;
        }
        dispatch(storePartialOrg(orgData));
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        props.handleSubmit(formState);
    }

    return formState ? (
        <S.Wrapper>
            <S.HContainer>
                <S.Logo src={logo} />
            </S.HContainer>
            <S.BContainer>
                <S.Form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
                    <S.StepWrapper>
                        <S.SubStep>
                            <S.FieldsHeader>{props.title}</S.FieldsHeader>
                            <S.Fields>
                                {props.fields.map((field, index) => {
                                    return (
                                        <FormField
                                            key={index}
                                            label={field.label}
                                            value={formState[field.name].value || ""}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(field.name, e)}
                                        />
                                    );
                                })}
                            </S.Fields>
                        </S.SubStep>
                        <S.SubStep>
                            <S.Children>
                                <S.ChildContainer>
                                    {props.children}
                                </S.ChildContainer>
                            </S.Children>
                            <S.SubmitWrapper>
                                <S.SubmitContainer>
                                    <Button
                                        formSubmit={true}
                                        label={props.submitBtnLabel}
                                        disabled={true}
                                        type={"primary"}
                                        handlePress={(e: React.SyntheticEvent) => handleSubmit(e)}
                                    />
                                </S.SubmitContainer>
                            </S.SubmitWrapper>
                        </S.SubStep>
                    </S.StepWrapper>
                </S.Form>
            </S.BContainer>
        </S.Wrapper>
    ) : null;
}