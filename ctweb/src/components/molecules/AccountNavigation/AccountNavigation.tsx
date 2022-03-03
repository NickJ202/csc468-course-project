import React from "react";
import {ReactSVG} from "react-svg";

import {SectionTitle} from "../../atoms/SectionTitle";

import {OuterHandler} from "../../../handlers/OuterHandler";

import account from "../../../assets/account.svg";
import chevronUD from "../../../assets/chevron-ud.svg";

import {formatIdentifier, handleLogout} from "../../../util";

import {language} from "../../../language";

import * as S from "./styles";
import {IProps} from "./types";

import * as C from "../../../config";

export default function AccountNavigation(props: IProps) {
    const [active, setActive] = React.useState(false);
    return (
        <>
            <OuterHandler handler={() => setActive(!active)} active={active}>
                <S.IdentifierClosed
                    active={active}
                    onClick={() => setActive(!active)}
                >
                    <S.ClosedCenterContainer>
                        <S.Icon active={active}>
                            <ReactSVG src={account}/>
                        </S.Icon>
                        <S.FormattedIdentifier active={active}>
                            {formatIdentifier(props.identifier)}
                        </S.FormattedIdentifier>
                        <S.ChevronIcon active={active}>
                            <ReactSVG src={chevronUD}/>
                        </S.ChevronIcon>
                    </S.ClosedCenterContainer>
                </S.IdentifierClosed>

                {active &&
                <S.AccountBodyContainer>
                    <S.BodyTopContainer>
                        <S.Identifier>
                            <b>{props.identifier}</b>
                        </S.Identifier>
                        <S.LogOut onClick={handleLogout}>
                            {language.logOut}
                        </S.LogOut>
                    </S.BodyTopContainer>
                    <S.BodyBottomContainer>
                        <SectionTitle header={language.account.title}/>
                        <ul>
                            {C.URLS.account.map((elem, index) => (
                                <S.LinkContainer key={index}>
                                    <a href={elem.url}>
                                        {elem.label}
                                    </a>
                                </S.LinkContainer>
                            ))}
                        </ul>
                    </S.BodyBottomContainer>
                </S.AccountBodyContainer>
                }
            </OuterHandler>
        </>
    )
}