import React from "react";

import { Button } from "../../atoms/Button";

import * as S from "./styles";
import { IProps } from "./types";

export default function CenterComponent(props: IProps) {
  return (
    <S.Wrapper>
      <S.Element>
        <S.Header>{props.header}</S.Header>
      </S.Element>
      <S.Element>
        <S.Image src={props.imageSrc} />
      </S.Element>
      <S.Element>
        <S.Info>
          <b>{props.information}</b>
        </S.Info>
      </S.Element>
      <S.Element>
        <Button
          formSubmit={false}
          label={props.actionLabel}
          disabled={false}
          type={"primary"}
          handlePress={props.handleAction}
        />
      </S.Element>
    </S.Wrapper>
  );
}
