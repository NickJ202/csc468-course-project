import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  @media(max-width: ${SC.STYLING.cutoffInitial}) {
    max-width: none;
  }
`;

export const TextArea = styled.textarea<{disabled: boolean, invalid: boolean}>`
  margin-top: 5px;
  &:focus {
    outline: 0;
    border: 1px solid ${props => props.invalid ?
            props.theme.colors.form.invalid.outline : props.theme.colors.form.valid.outline};
    box-shadow: 0 0 1px 1px ${props => props.invalid ?
            props.theme.colors.form.invalid.shadow : props.theme.colors.form.valid.shadow};
    transition: box-shadow, border 225ms ease-in-out;
  }
`;