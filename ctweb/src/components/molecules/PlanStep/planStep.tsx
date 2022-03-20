import React from "react";

//import logo from "../../../assets/logo-title-primary.png";

//import { Button } from "../../atoms/Button";
import { FormField } from "../../atoms/FormField";
import { TextArea } from "../../atoms/TextArea";
import { SectionTitle } from "../../atoms/SectionTitle";

import * as S from "./styles";

import { IProps } from "./types";
import { language } from '../../../language';

export default function PlanStep(props: IProps) {
    // const dispatch = useDispatch();

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        console.log(e.target.value);
    }

    function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }

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
                    value={""}
                    onChange={(e: any) => handleFieldChange(e)}
                />

                <TextArea
                    label={language.basicInfo.description}
                    value={""}
                    onChange={(e: any) => handleTextChange(e)}
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