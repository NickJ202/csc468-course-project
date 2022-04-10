import { NStringType } from "../../types"

export type AuthType = {
    token: NStringType;
    userId: NStringType;
    email: NStringType;
}

export type AuthActionType = {
    type: string;
    payload: AuthType;
}