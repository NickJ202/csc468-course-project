import React from "react";
import { useDispatch, useSelector } from "react-redux";

//import logo from "../../../assets/logo-title-primary.png";

//import { Button } from "../../atoms/Button";
import { FormField } from "../../atoms/FormField";
import { TextArea } from "../../atoms/TextArea";
import { storePartialOrg } from "../../../redux/org/actions";

import { IProps } from "./types";
import * as S from "./styles";

import { RootState } from "../../../redux/store";
import { language } from '../../../language';

export default function CreateStep(props: IProps) {
    const dispatch = useDispatch();
    const orgData = useSelector((state: RootState) => state.orgReducer);
    const [formState, setFormState] = React.useState<any>(undefined);

    React.useEffect(() => {
        if (!formState) {
            let fields: any = {};
            for (const field of props.fields) {
                fields[field.name] = {
                    value: orgData[field.name],
                    invalid: false
                }
            }
            setFormState(fields)
        }
    }, [orgData, formState, props.fields]);

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        console.log(e.target.value);
    }

    function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        //props.handleSubmit(formState);
    }

    return formState ? (
        <ul>
            <li>
                <S.Form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
                    <S.SubStep>
                            <S.FieldsHeader>Event Location</S.FieldsHeader>
                            <S.Fields>
                                {props.fields.map((field, index) => {
                                    return (
                                        <FormField
                                            key={index}
                                            label={field.label}
                                            value={formState[field.name].value || ""}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFieldChange(e)}
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
                    </S.SubStep>
                </S.Form>
            </li>
            <S.Gap />
            <li>
                
            </li>
        </ul>
    ) : null;
}