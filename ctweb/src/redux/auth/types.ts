import { NStringType } from "../../types"

export type AuthType = {
    token: NStringType;
    userId: NStringType;
    org: NStringType;
    email: NStringType;
}

export type AuthActionType = {
    type: string;
    payload: AuthType;
}