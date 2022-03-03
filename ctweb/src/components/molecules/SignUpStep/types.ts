import React from "react";
import {FormFieldType} from "../../../types";

export interface IProps {
    title: string;
    fields: FormFieldType[];
    submitBtnLabel: string;
    handleSubmit: (formState: any) => void;
    children?: React.ReactNode;
}