import React from "react";
import { ReactSVG } from "react-svg";

import { IconButton } from "../components/atoms/IconButton";

import { AccountNavigation } from "../components/molecules/AccountNavigation";

import logo from "../assets/logo-primary.png";
import logoMobile from "../assets/logo-title-alt.png";
import menu from "../assets/menu.svg";
import events from "../assets/events.svg";
import account from "../assets/account.svg";

import * as S from "./styles";
import { IProps } from "./types";
import * as U from "../urls";

import {
  checkCurrentPath,
  checkDesktop,
  checkWindowResize,
  hideDocumentBody,
  formatCapitalize,
} from "../util";

function NavigationElement(props: IProps) {
  const active = checkCurrentPath(props.href);
  return (
    <S.NavigationLink active={active} href={props.href}>
      <S.RowContainer>
        <S.Icon active={active}>
          <ReactSVG src={props.src} />
        </S.Icon>
        {!props.desktop && (
          <S.Name>
            {props.name.charAt(0).toUpperCase() +
              props.name.substring(1, props.name.length)}
          </S.Name>
        )}
      </S.RowContainer>
    </S.NavigationLink>
  );
}

export default function Navigation() {
  const [open, setOpen] = React.useState(checkDesktop());
  const [desktop, setDesktop] = React.useState(checkDesktop());

  function handleWindowResize() {
    if (checkDesktop()) {
      setDesktop(true);
      setOpen(true);
    } else {
      setDesktop(false);
      setOpen(false);
    }
  }

  function handleNavStatus() {
    checkDesktop() ? setOpen(true) : setOpen(!open);
  }

  checkWindowResize(handleWindowResize);

  if (open && !checkDesktop()) {
    hideDocumentBody();
  }

  const NavigationContainer = checkDesktop()
    ? S.NavigationContainer
    : S.NavigationContainerMobile;

  return (
    <nav>
      <S.HeaderContainer>
        {!desktop && (
          <S.MenuContainer>
            <S.Menu>
              <IconButton src={menu} handlePress={handleNavStatus} />
            </S.Menu>
          </S.MenuContainer>
        )}
        <S.AccountNavigationContainer>
          <AccountNavigation
            desktop={desktop}
            email={"nickjuliano20@gmail.com"}
          />
        </S.AccountNavigationContainer>
      </S.HeaderContainer>

      {open && (
        <>
          {!desktop && <S.Backdrop onClick={handleNavStatus} />}
          <NavigationContainer>
            <a href={U.base}>
              <S.LogoContainer>
                <S.Logo src={desktop ? logo : logoMobile} />
              </S.LogoContainer>
            </a>

            <S.ElementsContainer>
              <S.ElementContainer>
                <NavigationElement
                  href={U.events}
                  src={events}
                  name={formatCapitalize(U.events)}
                  desktop={desktop}
                />
              </S.ElementContainer>

              <S.FooterContainer>
                <NavigationElement
                  href={U.account}
                  src={account}
                  name={formatCapitalize(U.account)}
                  desktop={desktop}
                />
              </S.FooterContainer>
            </S.ElementsContainer>
          </NavigationContainer>
        </>
      )}
    </nav>
  );
}
