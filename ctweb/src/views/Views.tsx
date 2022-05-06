import React from "react";
import * as S from "./styles";
import { Breadcrumbs } from "../components/molecules/Breadcrumbs";
import * as C from "../config";

export const View: React.FC<{ view: React.ComponentType }> = ({
  view,
}) => {
  const RouteView: React.ComponentType = view;

  return (
    <S.View>
      <S.Wrapper>
        <S.HView>
          <S.HViewSection>
            {view.name !== "NotFoundView" && <Breadcrumbs />}
          </S.HViewSection>
          <S.Portal id={C.DOM.viewHeader}></S.Portal>
        </S.HView>
        <S.BView>
          <RouteView />
        </S.BView>
      </S.Wrapper>
    </S.View>
  );
};

export const AuthView: React.FC<{ view: React.ComponentType }> = ({
  view,
}) => {
  const RouteView: React.ComponentType = view;

  return (
    <S.AuthView>
      <S.Spacer />
      <RouteView />
      <S.Spacer />
    </S.AuthView>
  );
};
