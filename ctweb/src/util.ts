import { AxiosResponse } from "axios";

import * as SC from "./styling-config";
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
  const path = window.location.pathname;
  if (path === U.base || path === U.logIn) {
    return U.events.includes(url.substring(1, url.length - 1));
  }
  return path.includes(url.substring(1, url.length - 1));
}

export function formatEmail(email: string) {
  const prefix = email.substring(0, email.indexOf("@"));
  return prefix.substring(0, 7) + (prefix.length > 7 ? "..." : "");
}

export function formatCapitalize(text: string) {
  return (
    text.charAt(0).toUpperCase() + text.substring(1, text.length)
  ).replaceAll("/", "");
}

export function camelToSnake(obj: any) {
  if (typeof obj !== "object") return obj;
  for (let o in obj) {
    let n = o.replace(/([A-Z0-9])/g, function ($1) {
      return "_" + $1.toLowerCase();
    });
    if (n !== o) {
      if (obj.hasOwnProperty(o)) {
        obj[n] = obj[o];
        delete obj[o];
      }
    }
    if (typeof obj[n] == "object") {
      obj[n] = camelToSnake(obj[n]);
    }
  }
  return obj;
}

export function snakeToCamel(obj: any) {
  if (typeof obj !== "object") return obj;
  for (let o in obj) {
    let n = o.replace(/([_][a-z0-9])/ig, function ($1) {
      return $1.toUpperCase()
        .replace("_", "");
    });
    if (n !== o) {
      if (obj.hasOwnProperty(o)) {
        obj[n] = obj[o];
        delete obj[o];
      }
    }
    if (typeof obj[n] == "object") {
      obj[n] = snakeToCamel(obj[n]);
    }
  }
  return obj;
}

export function convertResponse(response: AxiosResponse) {
  let convertedResponse = Object.assign({}, response);
  delete convertedResponse.data;
  convertedResponse["data"] = snakeToCamel(response.data);
  return convertedResponse;
}