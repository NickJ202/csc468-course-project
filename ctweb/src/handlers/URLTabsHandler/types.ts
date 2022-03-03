import {URLViewType} from "../../types";

export interface ITProps {
    label: string;
    active: boolean;
    onClick: (url: string) => void;
    url: string;
}

export interface ICProps {
    tabs: URLViewType[];
}

export interface IUProps {
    tabs: URLViewType[];
    activeUrl: string;
}