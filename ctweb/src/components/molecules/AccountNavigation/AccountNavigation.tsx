import React from "react";
import { useDispatch } from "react-redux";
import { ReactSVG } from "react-svg";

// import { SectionTitle } from "../../atoms/SectionTitle";

import { OuterHandler } from "../../../handlers/OuterHandler";

import account from "../../../assets/account.svg";
import chevronUD from "../../../assets/chevron-ud.svg";

import { formatEmail } from "../../../util";
import { language } from "../../../language";

import * as S from "./styles";
import { IProps } from "./types";

import { clearAuth } from "../../../redux/auth/actions";

// import * as C from "../../../config";

export default function AccountNavigation(props: IProps) {
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(false);

  function handleLogout() {
    dispatch(clearAuth());
  }

  return (
    <>
      <OuterHandler handler={() => setActive(!active)} active={active}>
        <S.EmailClosed active={active} onClick={() => setActive(!active)}>
          <S.ClosedCenterContainer>
            <S.Icon active={active}>
              <ReactSVG src={account} />
            </S.Icon>
            <S.FormattedEmail active={active}>
              {formatEmail(props.email)}
            </S.FormattedEmail>
            <S.ChevronIcon active={active}>
              <ReactSVG src={chevronUD} />
            </S.ChevronIcon>
          </S.ClosedCenterContainer>
        </S.EmailClosed>

        {active && (
          <S.AccountBodyContainer>
            <S.BodyTopContainer>
              <S.Email>
                <b>{props.email}</b>
              </S.Email>
              <S.LogOut onClick={handleLogout}>{language.logOut}</S.LogOut>
            </S.BodyTopContainer>
            {/* <S.BodyBottomContainer>
              <SectionTitle header={language.account.title} />
              <ul>
                {C.URLS.account.map((elem, index) => (
                  <S.LinkContainer key={index}>
                    <a href={elem.url}>{elem.label}</a>
                  </S.LinkContainer>
                ))}
              </ul>
            </S.BodyBottomContainer> */}
          </S.AccountBodyContainer>
        )}
      </OuterHandler>
    </>
  );
}
