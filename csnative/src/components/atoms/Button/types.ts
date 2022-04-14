import {ButtonType} from '../../../types';

export interface IProps {
    label: string;
    handlePress: () => void;
    type: ButtonType;
    loading: boolean;
    disabled: boolean;
}