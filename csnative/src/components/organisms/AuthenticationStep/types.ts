import React from "react";

export interface IProps {
    header: string;
    buttonLabel: string;
    action: () => void;
    spaceAround?: boolean;
    modalVisible?: boolean;
    errorMessage?: string;
    handleModal?: () => void;
    handleLoading: (loading: boolean) => void;
    buttonDisabled: boolean;
    children: React.ReactNode;
}