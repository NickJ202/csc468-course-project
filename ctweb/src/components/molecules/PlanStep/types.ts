import {FormFieldType} from "../../../types";

export interface IProps {
    title: string;
    fields: FormFieldType[];
    //handleSubmit: (formState: any) => void;
}

interface IValue {
    value: string | number | null;
    invalid: boolean;
}

export interface IFields {
    [name: string]: IValue;
}