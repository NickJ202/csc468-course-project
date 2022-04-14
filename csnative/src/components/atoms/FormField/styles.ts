import styled from 'styled-components/native';

type FormFieldProps = {
    disabled: boolean;
    focused: boolean;
    hasHelpText: boolean;
}

export const Wrapper = styled.View<FormFieldProps>`
    height: ${props => props.hasHelpText ?
        `75px` : `50px`};
    width: 85%;
`;

export const Container = styled.View<FormFieldProps>`
    height: 50px;
    width: 100%;
    border: 1px solid ${props => props.focused ? 
        props.theme.colors.transparent : props.theme.colors.border};
    background: ${props => props.disabled ?
        props.theme.colors.formBackgroundDisabled  : props.theme.colors.formBackground};
    padding: 10px;
    border-radius: ${props => props.theme.borderRadius.formField};
    box-shadow: ${props => props.focused ?
        `0 0 3px ${props.theme.colors.boxShadow}` : 'none'};
    elevation: ${props => props.focused ?
        2 : 0};
`;

export const FormField = styled.TextInput`
    height: 100%;
    width: 100%;
    font-size: ${props => props.theme.typography.largeFontSize};
    text-align: center;
    font-family: ${props => props.theme.typography.baseFontFamily};
`;

export const TextContainer = styled.View`
    height: 17.5px;
    margin-top: 7.5px;
    width: 100%;
`;