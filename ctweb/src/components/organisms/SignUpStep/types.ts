import React from "react";
import { FormFieldType } from "../../../types";

export interface IProps {
  title: string;
  fields: FormFieldType[];
  submitBtnLabel: string;
  handleSubmit: (formState: any) => void;
  loading: boolean;
  children: React.ReactNode;
  backButton?: boolean;
}

interface IValue {
  value: string | number | null;
  invalid: boolean;
}

export interface IFields {
  [name: string]: IValue;
}
