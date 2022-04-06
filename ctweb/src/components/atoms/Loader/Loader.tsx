import { IProps } from "./types";
import * as S from "./styles";

export default function Loader(props: IProps) {
  if (props.alt) {
    return (
      <S.AltContainer>
        <S.AltLoader />
      </S.AltContainer>
    );
  }
  return (
    <S.Container>
      <S.Spinner>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
        <S.Blade></S.Blade>
      </S.Spinner>
    </S.Container>
  );
}
