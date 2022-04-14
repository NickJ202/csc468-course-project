import {DefaultTheme} from 'styled-components';

export const theme: DefaultTheme = {
    borderRadius: {
        buttonPrimary: "10px",
        buttonSecondary: "0px",
        formField: "10px",
        modal: "10px"
    },
    colors: {
        border: "#D3D3D3",
        boxShadow: "#D3D3D3",
        buttonUnderlayPrimary: "#39A373",
        buttonUnderlaySecondary: "#F4F5F6",
        disabledBackground: "#E0E1E2",
        error: "#FF0A47",
        fontPrimary: "#000000",
        fontPrimaryAlt: "#666666",
        fontSecondary: "#FFFFFF",
        fontSecondaryAlt: "#40B882",
        formBackground: "#FFFFFF",
        formBackgroundDisabled: "#F4F5F6",
        keyboardAppearance: "light",
        modalBackground: "#FFFFFF",
        placeHolderText: "#ABABAB",
        primary: "#40B882",
        statusBar: "dark-content",
        tabBarActive: "#40B882",
        tabBarInactive: "#D3D3D3",
        translucent: "rgba(255, 255, 255, 0.75)",
        transparent: "rgba(255, 255, 255, 0)",
        viewBackground: "#FFFFFF"
    },
    typography: {
        baseFontSize: "16px",
        baseFontWeight: "500",
        boldFontWeight: "600",
        baseFontFamily: "Segoe-UI",
        boldFontFamily: "Segoe-UI-SemiBold",
        headerFontSize: "26px",
        largeFontSize: "18px",
        smallFontSize: "15px",
        xLargeFontSize: "22px",
        xSmallFontSize: "12px"
    }
}