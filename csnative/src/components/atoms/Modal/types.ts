import { FontColorType } from "../../../types";

export interface IProps {
    visible: boolean;
    header: string;
    headerColor: FontColorType;
    message: string;
    buttonLabel: string;
    handleButtonAction: () => void;
}