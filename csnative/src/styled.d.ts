import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: {
            buttonPrimary: string;
            buttonSecondary: string;
            formField: string;
            modal: string;
        },
        colors: {
            border: string;
            boxShadow: string;
            buttonUnderlayPrimary: string;
            buttonUnderlaySecondary: string;
            disabledBackground: string;
            error: string;
            fontPrimary: string;
            fontPrimaryAlt: string;
            fontSecondary: string;
            fontSecondaryAlt: string;
            formBackground: string;
            formBackgroundDisabled: string;
            keyboardAppearance: string;
            modalBackground: string;
            placeHolderText: string;
            primary: string;
            statusBar: string;
            tabBarActive: string;
            tabBarInactive: string;
            translucent: string;
            transparent: string;
            viewBackground: string;
        },
        typography: {
            baseFontSize: string;
            baseFontWeight: string;
            baseFontFamily: string,
            boldFontFamily: string;
            boldFontWeight: string;
            headerFontSize: string;
            largeFontSize: string;
            smallFontSize: string;
            xLargeFontSize: string;
            xSmallFontSize: string;
        }
    }
}