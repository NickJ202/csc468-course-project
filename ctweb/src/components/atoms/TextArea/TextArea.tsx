import { IProps } from "./types";
import * as S from "./styles";

export default function TextArea(props: IProps) {
  return (
    <S.Wrapper>
      <label>{props.label}</label>
      <S.TextArea
        value={props.value}
        onChange={props.onChange}
        disabled={false}
        invalid={false}
      />
    </S.Wrapper>
  );
}
