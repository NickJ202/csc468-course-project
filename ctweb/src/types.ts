import React from "react";

export interface IViewProps {
    setLoading: (status: boolean) => void;
}

export interface IStyleProps {
    active?: boolean;
    disabled?: boolean;
    completed?: boolean;
}

export type FormFieldType = {
    name: string;
    label: string;
}

export interface ISignUpCollection {
    org: {
        fields: FormFieldType[]
    },
    contact: {
        fields: FormFieldType[]
    }
}

export type ButtonType = "primary" | "secondary";

export type URLViewType = {
    index: number;
    label: string;
    url: string;
    view: React.ComponentType;
}

export interface IURLView {
    account: URLViewType[],
    eventsCreate: URLViewType[]
}

export type RefType = { current: HTMLElement };

export type NStringType = string | null;