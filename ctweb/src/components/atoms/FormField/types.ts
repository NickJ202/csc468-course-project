import React from "react";

export interface IProps {
    label: string;
    value: string;
    pattern?: string;
    type?: "password";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}