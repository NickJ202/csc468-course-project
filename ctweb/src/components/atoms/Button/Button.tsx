import { IProps } from "./types";
import * as S from "./styles";

import { Loader } from "../Loader";

export default function Button(props: IProps) {
  const buttonStyle = getType();
  const StyledButton = buttonStyle.wrapper;
  function getType() {
    let buttonObj: {
      wrapper: any;
    };
    switch (props.type) {
      case "secondary":
        buttonObj = {
          wrapper: S.Secondary,
        };
        return buttonObj;
      default:
        buttonObj = {
          wrapper: S.Primary,
        };
        return buttonObj;
    }
  }

  return (
    <StyledButton
      type={props.formSubmit ? "submit" : "button"}
      onClick={props.handlePress}
      onKeyPress={props.handlePress}
      disabled={props.disabled}
    >
      {props.loading ? <Loader alt /> : props.label}
    </StyledButton>
  );
}
