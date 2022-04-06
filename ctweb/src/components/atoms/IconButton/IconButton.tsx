import { ReactSVG } from "react-svg";

import * as S from "./styles";
import { IProps } from "./types";

export default function IconButton(props: IProps) {
  return (
    <S.IconButton onClick={props.handlePress}>
      <ReactSVG src={props.src} />
    </S.IconButton>
  );
}
