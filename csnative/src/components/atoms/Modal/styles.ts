import styled from 'styled-components/native'

export const Modal = styled.Modal`

`

export const Wrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.translucent};
`;

export const Container = styled.View`
    width: 90%;
    background: ${props => props.theme.colors.modalBackground};
    flex: 0.25;
    align-items: center;
    justify-content: space-around;
    border-radius: ${props => props.theme.borderRadius.modal};
    box-shadow: 0 0 3px ${props => props.theme.colors.boxShadow};
    elevation: 2;
`;

export const Info = styled.View`

`;

export const Header = styled.Text`
    color: ${props => props.theme.colors.error};
`;

export const Message = styled.Text`
    margin-top: 15px;
`;