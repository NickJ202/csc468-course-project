import { IProps } from "./types";
import * as S from "./styles";

export default function FormField(props: IProps) {
  return (
    <S.Wrapper>
      <label>{props.label}</label>
      <S.Input
        type={props.type ? props.type : "text"}
        value={props.value}
        onChange={props.onChange}
        disabled={false}
        invalid={false}
        placeholder={props.placeholder ? props.placeholder : ""}
      />
      <S.ErrorContainer>
        {
          props.error && <S.Error>{props.error}</S.Error>
        }
      </S.ErrorContainer>
    </S.Wrapper>
  );
}
