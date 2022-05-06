import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const MainContainer = styled.div`
    height: auto;
    width: 450px;
    max-width: 95vw;
    background: ${(props) => props.theme.colors.container.primary.background};
    border: 1px solid ${(props) => props.theme.colors.border.primary};
    border-radius: ${SC.STYLING.borderRadius};
    margin: 11.5vh auto 0 auto;
`;

export const HeaderContainer = styled.div`
    height: 100px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const HeaderLogo = styled.img`
    width: 150px;
    max-width: 35%;
    margin-bottom: 20px;    
`;

export const Form = styled.form`
    height: calc(100% - 130px);
    width: 100%;
    position: relative;
    padding: 25px 50px;
    @media (max-width: ${SC.STYLING.cutoffSecondary}) {
        padding: 25px;
      }
`;

export const FieldContainer = styled.div`
    margin-bottom: 20px;
`;

export const ErrorContainer = styled.div`
    height: 20px;
    color: ${(props) => props.theme.colors.font.invalid};
`;

export const Error = styled.span`
  font-size: ${(props) => props.theme.typography.size.xSmall};
  border-left: 3.5px solid ${(props) => props.theme.colors.font.invalid};
  padding-left: 5px;
`;


export const BottomContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    height: ${SC.STYLING.buttonHeight};
`;

export const SubmitContainer = styled.div`
    position: absolute;
    right: 0;
`;

export const LinkContainer = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
`;