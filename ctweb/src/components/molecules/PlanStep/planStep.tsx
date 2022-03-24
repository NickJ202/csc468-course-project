import React, { useEffect } from "react";

//import logo from "../../../assets/logo-title-primary.png";

//import { Button } from "../../atoms/Button";
import { FormField } from "../../atoms/FormField";
import { TextArea } from "../../atoms/TextArea";
import { SectionTitle } from "../../atoms/SectionTitle";

import * as S from "./styles";
import * as CF from "../../../config";

import { IProps, IFields } from "./types";
import { language } from '../../../language';

export default function PlanStep(props: IProps) {
    const propFields = CF.CREATE.basicInfo.fields;
    const [title, setTitle] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");

    // useEffect(() => {
    //     if (!formState) {
    //         let fields: IFields = {};
    //             for (const field of propFields) {
    //                 fields[field.name] = {
    //                     value: "",
    //                     invalid: false
    //                 }
    //             }
    //             console.log(fields);
    //             setFormState(fields);
    //             console.log(formState);
    //         }
    //     });

    // function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    //     let fields = { ...formState };
    //     fields["description"].value = e.target.value;
    //     setFormState(fields);
    //     console.log(formState);
    // }

    // function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     let fields = { ...formState };
    //     fields["title"].value = e.target.value;
    //     setFormState(fields);
    //     console.log(formState);
    // }

    // function handleSubmit(e: React.SyntheticEvent) {
    //     e.preventDefault();
    //     //props.handleSubmit(formState);
    // }

    return (
        <S.Wrapper>
            <SectionTitle header={props.title} />
            <S.FlexContainer>
                <FormField
                    label={language.basicInfo.eventTitle}
                    value={title}
                    onChange={(e: any) => setTitle(e.target.value)}
                />

                <TextArea
                    label={language.basicInfo.description}
                    value={description}
                    onChange={(e: any) => setDescription(e.target.value)}
                />
            </S.FlexContainer>
        </S.Wrapper>
        // <ul>
        //     <li>
        //         <S.Form onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
        //             <S.SubStep>
        //                 <S.FieldsHeader>{props.title}</S.FieldsHeader>

        //             </S.SubStep>
        //             <S.SubStep>
        //                 {/* <S.Children>
        //                         <S.ChildContainer>
        //                             {props.children}
        //                         </S.ChildContainer>
        //                     </S.Children> */}
        //             </S.SubStep>
        //         </S.Form>
        //     </li>
        //     {/* <S.Gap />
        //     <li>
        //         <S.FieldsHeader>Cover Photo</S.FieldsHeader>
        //         <S.smallGap />
        //         <input type="file" id="image_input" accept="image/png, image/jpg" ></input>
        //         <div id="display_image"></div>
        //         <script src="script.js"></script>
        //     </li> */}
        // </ul>
    );
}