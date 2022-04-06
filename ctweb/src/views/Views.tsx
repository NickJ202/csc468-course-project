import React from "react";
import { IViewProps } from "../types";
import * as S from "./styles";
import { Breadcrumbs } from "../components/molecules/Breadcrumbs";
import * as C from "../config";
import { Loader } from "../components/atoms/Loader";

export const View: React.FC<{ view: React.ComponentType<IViewProps> }> = ({
  view,
}) => {
  const RouteView: React.ComponentType<IViewProps> = view;

  const [loading, setLoading] = React.useState<boolean>(false);

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
          {loading ? (
            <Loader />
          ) : (
            <RouteView setLoading={(status: boolean) => setLoading(status)} />
          )}
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
