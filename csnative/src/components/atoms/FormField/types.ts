import { KeyboardAutoCapitalizeType, KeyboardType, KeyboardTextContextType } from '../../../types';

export interface IProps {
    placeholder: string;
    type: KeyboardType;
    value: string;
    onChange: (text: string) => void;
    secureTextEntry: boolean;
    autoFocus: boolean;
    autoCapitalize: KeyboardAutoCapitalizeType;
    textContentType: KeyboardTextContextType;
    helpText?: string;
    disabled?: boolean;
}