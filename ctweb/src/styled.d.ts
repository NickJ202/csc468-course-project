import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      border: {
        primary: string;
        secondary: string;
        active: string;
      };
      button: {
        primary: {
          background: string;
          disabled: string;
          label: string;
          hover: string;
        };
        secondary: {
          background: string;
          disabled: string,
          label: string;
          labelDisabled: string;
          hover: string;
        };
      };
      container: {
        primary: {
          background: string;
          hover: string;
        };
        secondary: {
          background: string;
        };
      };
      font: {
        active: string;
        primary: string;
        secondary: string;
        alt: {
          primary: string;
        };
      };
      form: {
        valid: {
          outline: string;
          shadow: string;
        };
        invalid: {
          outline: string;
          shadow: string;
        };
      };
      icon: {
        fill: string;
        focus: string;
      };
      loader: {
        primary: string;
      };
      nav: {
        icon: {
          active: string;
          inactive: string;
        };
        background: {
          top: string;
          side: string;
          active: string;
        };
        label: string;
      };
      tab: {
        active: {
          background: string;
          border: string;
        };
      };
      backdrop: string;
      boxShadow: string;
      transparent: string;
      viewBackground: string;
    };
    typography: {
      fontFamily: string;
      boldFontWeight: string;
      regularFontWeight: string;
      size: {
        h1: string;
        h2: string;
        base: string;
        small: string;
        xSmall: string;
      };
    };
  }
}
