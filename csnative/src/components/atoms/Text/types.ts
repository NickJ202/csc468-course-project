import { FontColorType, FontSizeType } from "../../../types";

export interface IProps {
    bold?: boolean;
    centered?: boolean;
    children: string;
    color: FontColorType;
    size: FontSizeType;
}