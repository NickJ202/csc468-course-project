import React from "react";

export interface IStyleProps {
  active?: boolean;
  disabled?: boolean;
  completed?: boolean;
}

export type FormFieldType = {
  name: string;
  label: string;
};

export interface ISignUpCollection {
  org: {
    fields: FormFieldType[];
  };
  contact: {
    fields: FormFieldType[];
  };
}

export interface ICreateCollection {
  basicInfo: {
    fields: FormFieldType[];
  };
  address: {
    fields: FormFieldType[];
  };
}

export type ButtonType = "primary" | "secondary";

export type URLViewType = {
  index: number;
  label: string;
  url: string;
  view: React.ComponentType;
};

export interface IURLView {
  account: URLViewType[],
  eventsCreate: URLViewType[]
}

export type RefType = { current: HTMLElement };

export type NStringType = string | null;
