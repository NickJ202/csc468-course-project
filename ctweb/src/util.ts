import * as SC from "./styling-config";
import * as C from "./config";
import * as U from "./urls";

export function checkDesktop(): boolean {
    return window.innerWidth > parseInt(SC.STYLING.cutoffInitial);
}

export function hideDocumentBody(): void {
    document.body.style.overflow = "hidden";
}

export function checkWindowResize(fn: () => void): void {
    window.addEventListener("resize", fn);
}

export function checkCurrentPath(url: string): boolean {
    if (window.location.pathname === U.base) {
        return U.events.includes(url.substring(1, url.length - 1));
    }
    return window.location.pathname.includes(url.substring(1, url.length - 1));
}

export function formatIdentifier(identifier: string) {
    const prefix = identifier.substring(0, identifier.indexOf("@"));
    return prefix.substring(0, 7) + (prefix.length > 7 ? "..." : "");
}

export function formatCapitalize(text: string) {
    return (text.charAt(0).toUpperCase() + text.substring(1, text.length)).replaceAll("/", "");
}

export function handleLogout() {
    localStorage.removeItem(C.OAUTH.authStorageString);
    localStorage.removeItem(C.OAUTH.pkceCodeVerifier);
    localStorage.removeItem(C.OAUTH.pkceState);
    window.location.reload();
}