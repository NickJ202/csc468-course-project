import styled from "styled-components";

import * as SC from "../styling-config";
import { openLeft, fadeIn } from "../animations";

import { IStyleProps } from "../types";

export const NavigationContainer = styled.div`
  position: fixed;
  z-index: 4;
  height: 100%;
  width: ${SC.STYLING.navWidth};
  background: ${(props) => props.theme.colors.nav.background.side};
`;

export const NavigationContainerMobile = styled(NavigationContainer)`
  width: 200px;
  animation: ${openLeft} ${fadeIn};
`;

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 2;
  height: ${SC.STYLING.navHeight};
  width: 100%;
  background: ${(props) => props.theme.colors.nav.background.top};
  display: flex;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: ${SC.STYLING.navHeight};
  position: relative;
  &:hover {
    opacity: 0.75;
  }
`;

export const Logo = styled.img`
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Icon = styled.div<IStyleProps>`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    height: 100%;
    width: 100%;
    fill: ${(props) =>
      props.active
        ? props.theme.colors.nav.icon.active
        : props.theme.colors.nav.icon.inactive};

    &:hover {
      cursor: pointer;
      fill: ${(props) =>
        props.active
          ? props.theme.colors.nav.icon.active
          : props.theme.colors.nav.icon.inactive};
    }
  }

  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    left: 10%;
    transform: translate(-10%, -50%);
  }
`;

export const Name = styled.p`
  width: 40%;
  color: ${(props) => props.theme.colors.nav.label};
  font-weight: ${(props) => props.theme.typography.boldFontWeight};
  font-size: ${(props) => props.theme.typography.size.h2};
  position: absolute;
  top: 50%;
  left: 57.5%;
  transform: translate(-50%, -50%);
  padding-bottom: 2.5px;
`;

export const NavigationLink = styled.a<IStyleProps>`
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: block;
  background: ${(props) =>
    props.active
      ? props.theme.colors.nav.background.active
      : props.theme.colors.transparent};

  &:hover {
    background: ${(props) => props.theme.colors.nav.background.active};
  }
`;

export const ElementsContainer = styled.div`
  width: 100%;
  height: calc(100% - ${SC.STYLING.navHeight});
`;

export const ElementContainer = styled.div`
  width: 100%;
  height: 35px;
  position: relative;
  @media (max-width: ${SC.STYLING.cutoffInitial}) {
    height: 40px;
  }
`;

export const FooterContainer = styled(ElementContainer)`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const MenuContainer = styled.div`
  height: 100%;
  width: 50px;
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2.5px;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${(props) => props.theme.colors.backdrop};
  z-index: 3;
`;

export const RowContainer = styled.div`
  display: flex;
`;

export const AccountNavigationContainer = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
`;
