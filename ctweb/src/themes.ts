import { DefaultTheme } from "styled-components";

const THEME = {
  default: {
    black: "#000000",
    blue: "#3479C2",
    gray: "#666666",
    green: "#40B882",
    jet: "#353137",
    offWhite: "#FAFAFA",
    white: "#FFFFFF",
  },
};

export const theme: DefaultTheme = {
  colors: {
    border: {
      primary: "#DCDCDC",
      secondary: "#BDBDBD",
      active: THEME.default.green,
    },
    button: {
      primary: {
        background: THEME.default.green,
        disabled: "#9EDEC1",
        label: THEME.default.white,
        hover: "#39A373",
      },
      secondary: {
        background: THEME.default.white,
        label: THEME.default.blue,
        hover: THEME.default.offWhite,
      },
    },
    container: {
      primary: {
        background: THEME.default.white,
        hover: THEME.default.offWhite,
      },
      secondary: {
        background: THEME.default.offWhite,
      },
    },
    font: {
      active: THEME.default.blue,
      primary: THEME.default.gray,
      secondary: THEME.default.black,
      alt: {
        primary: THEME.default.white,
      },
    },
    form: {
      valid: {
        outline: THEME.default.blue,
        shadow: "#BCDBFD",
      },
      invalid: {
        outline: "#FF0A47",
        shadow: "#FFD5E0",
      },
    },
    icon: {
      fill: THEME.default.gray,
      focus: THEME.default.black,
    },
    loader: {
      primary: THEME.default.green,
    },
    nav: {
      icon: {
        active: THEME.default.green,
        inactive: "#888888",
      },
      background: {
        top: THEME.default.white,
        side: THEME.default.jet,
        active: "rgba(64, 184, 130, 0.15)",
      },
      label: THEME.default.white,
    },
    tab: {
      active: {
        background: "#EFEFEF",
        border: THEME.default.blue,
      },
    },
    backdrop: "rgba(215, 216, 217, 0.575)",
    boxShadow: "#E4E4E4",
    transparent: "rgba(255, 255, 255, 0)",
    viewBackground: "#F4F5F6",
  },
  typography: {
    fontFamily: "Segoe UI",
    boldFontWeight: "500",
    regularFontWeight: "400",
    size: {
      h1: "26px",
      h2: "17px",
      base: "16px",
      small: "14px",
      xSmall: "13px",
    },
  },
};
