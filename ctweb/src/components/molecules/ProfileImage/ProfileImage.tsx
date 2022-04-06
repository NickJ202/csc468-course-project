import { Button } from "../../atoms/Button";

import * as S from "./styles";

import { language } from "../../../language";

export default function ProfileImage() {
  return (
    <S.Wrapper>
      <S.Title>{language.profileImage.title}</S.Title>
      <S.Content>
        <S.ImageWrapper></S.ImageWrapper>
        <S.ButtonContainer>
          <Button
            formSubmit={false}
            label={language.upload}
            disabled={false}
            type={"primary"}
            handlePress={() => console.log("handle upload")}
          />
          <Button
            formSubmit={false}
            label={language.edit}
            disabled={false}
            type={"secondary"}
            handlePress={() => console.log("handle edit")}
          />
        </S.ButtonContainer>
      </S.Content>
      <S.Info>
        <span>{language.profileImage.info}</span>
      </S.Info>
    </S.Wrapper>
  );
}
