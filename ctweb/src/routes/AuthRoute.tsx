import React from "react";
import {Redirect, Route} from "react-router-dom";
import axios from "axios";

import {OAUTH} from "../config";

/*
 * Oauth2.0 client implementation, authorization code grant
 * https://datatracker.ietf.org/doc/html/rfc6749#section-4.1
 * against cgauth oauth server with pkce extension
 */

function generateRandomString() {
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    return array;
}

function sha256(plain: any) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
}

function base64urlencode(str: any) {
    return btoa(String.fromCharCode(...new Uint8Array(str) as any))
        .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function pkceChallengeFromVerifier(v: any) {
    const hashed = await sha256(v);
    return base64urlencode(hashed);
}


// @ts-ignore
export const AuthRoute = ({render, redirect, ...props}) => {
    React.useEffect(() => {
        const headersIn = {
            "Content-Type": "application/x-www-form-urlencoded",
        };
        /* Redirection back from oauth login */
        if (window.location.href.indexOf("?code=") > -1) {
            const authCode = decodeURIComponent(window.location.href).split("?code=")[1].split("&state=")[0];
            const params = new URLSearchParams();
            params.append("grant_type", "authorization_code");
            params.append("code", authCode);
            params.append("redirect_uri", OAUTH.redirectURI);
            params.append("client_id", OAUTH.clientID);
            params.append("scope", "openid");
            params.append("code_verifier", localStorage.getItem(OAUTH.pkceCodeVerifier) || "");
            axios
                .post(OAUTH.tokenEndpoint, params, {headers: headersIn})
                .then(function (response) {
                    const d = {oauth: response.data};
                    localStorage.setItem(OAUTH.authStorageString, JSON.stringify(d));
                    window.location.href = decodeURIComponent(window.location.href).split("?code=")[0];
                    return response;
                })
                .catch(function (error) {
                    return Promise.reject(error);
                });
        }
        /* Initial redirect to authorization endpoint */
        else if (!localStorage.getItem(OAUTH.authStorageString)) {
            let state: any = generateRandomString();
            state = base64urlencode(state);
            localStorage.setItem(OAUTH.pkceState, state);

            const spec_code_verifier_source = new Uint8Array([
                116, 24, 223, 180, 151,
                153, 224, 37, 79, 250,
                96, 125, 216, 173, 187,
                186, 22, 212, 37, 77,
                105, 214, 191, 240, 91,
                88, 5, 88, 83, 132,
                141, 121
            ]);
            const code_verifier = base64urlencode(spec_code_verifier_source);
            localStorage.setItem(OAUTH.pkceCodeVerifier, code_verifier);
            console.log(`Verifier: ${code_verifier}`);

            (async function redirection() {
                const code_challenge = await pkceChallengeFromVerifier(code_verifier);
                const redirect = OAUTH.authorizationEndpoint
                    + "?response_type=code"
                    + "&client_id=" + encodeURIComponent(OAUTH.clientID)
                    + "&state=" + encodeURIComponent(state)
                    + "&scope=" + encodeURIComponent(OAUTH.requestedScopes)
                    + "&redirect_uri=" + encodeURIComponent(OAUTH.redirectURI)
                    + "&code_challenge=" + encodeURIComponent(code_challenge)
                    + "&code_challenge_method=S256";
                (window.location as any) = redirect;
            })();
        }
    }, []);

    return redirect ? (
            <Route
                {...props}
                render={render}
            >
                <Redirect to={redirect}/>
            </Route>
        ) :
        (
            <Route
                {...props}
                render={render}
            />
        )
};