import { IURLView, ISignUpCollection, ICreateCollection } from "./types";

import { Billing } from "./views/account/billing";
import { Users } from "./views/account/users";
import { Settings } from "./views/account/settings";

import { language } from "./language";
import * as U from "./urls";

const API_URI = process.env.REACT_APP_API_URI;

export const ORG_ENDPOINT = API_URI + "org/register/";
const AUTH_URI = process.env.REACT_APP_AUTH_URI;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

export const OAUTH = {
    authorizationEndpoint: AUTH_URI + "authorize",
    clientID: "cgauth",
    redirectURI: REDIRECT_URI + "events/",
    requestedScopes: "openid",
    tokenEndpoint: AUTH_URI + "token",
    authStorageString: "user",
    pkceCodeVerifier: "pkce_code_verifier",
    pkceState: "pkce_state"
};

export const DOM = {
    viewHeader: "view-header"
}

export const URLS: IURLView = {
    account: [
        { index: 0, label: language.account.billing.title, url: `${U.base}account/billing/`, view: Billing },
        { index: 1, label: language.account.users.title, url: `${U.base}account/users/`, view: Users },
        { index: 2, label: language.account.settings.title, url: `${U.base}account/settings/`, view: Settings }
    ]
}

export const SIGNUP: ISignUpCollection = {
    org: {
        fields: [
            { name: "name", label: language.signUp.org.fields.name },
            { name: "address1", label: language.signUp.org.fields.address },
            { name: "locality", label: language.signUp.org.fields.city },
            { name: "administrativeArea", label: language.signUp.org.fields.state },
            { name: "postalCode", label: language.signUp.org.fields.postalCode },
            { name: "country", label: language.signUp.org.fields.country }
        ]
    },
    contact: {
        fields: [
            { name: "firstName", label: language.signUp.contact.fields.firstName },
            { name: "lastName", label: language.signUp.contact.fields.lastName },
            { name: "phoneNumber", label: language.signUp.contact.fields.phoneNumber }
        ]
    },
};

export const CREATE: ICreateCollection = {
    basicInfo: {
        fields: [
            { name: "title", label: language.basicInfo.eventTitle },
            { name: "description", label: language.basicInfo.description }
        ]
    },
    address: {
        fields: [
            { name: "address1", label: language.signUp.org.fields.address },
            { name: "locality", label: language.signUp.org.fields.city },
            { name: "administrativeArea", label: language.signUp.org.fields.state },
            { name: "postalCode", label: language.signUp.org.fields.postalCode },
            { name: "country", label: language.signUp.org.fields.country }
        ]
    },
};