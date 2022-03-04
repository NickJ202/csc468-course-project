import React from "react";

import {URLTabsHandler} from "../../../handlers/URLTabsHandler";

import * as S from "./styles";
import * as C from "../../../config";

export default function Account() {
    return (
        <S.TabsContainer>
            <URLTabsHandler
                tabs={C.URLS.account}
                activeUrl={C.URLS.account[0].url}
            />
        </S.TabsContainer>
    );
}