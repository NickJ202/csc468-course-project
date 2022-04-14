import styled from 'styled-components/native';
import {FontColorType, FontSizeType} from '../../../types';

import {theme} from '../../../themes';

type TextProps = {
    bold: boolean;
    centered: boolean;
    color: FontColorType;
    size: FontSizeType;
}

function getColor(color: FontColorType) {
    switch (color) {
        case "primaryAlt":
            return theme.colors.fontPrimaryAlt;
        case "secondary":
            return theme.colors.fontSecondary;
        case "secondaryAlt":
            return theme.colors.fontSecondaryAlt;
        case "placeholder":
            return theme.colors.placeHolderText;
        case "error":
            return theme.colors.error;
        default:
            return theme.colors.fontPrimary;
    }
}

function getFontSize(size: FontSizeType) {
    switch (size) {
        case "xSmall":
            return theme.typography.xSmallFontSize;
        case "small":
            return theme.typography.smallFontSize;
        case "base":
            return theme.typography.baseFontSize;
        case "large":
            return theme.typography.largeFontSize;
        case "xLarge":
            return theme.typography.xLargeFontSize;
        case "header":
            return theme.typography.headerFontSize;
        default:
            return theme.typography.baseFontSize;
    }
}

export const Text = styled.Text<TextProps>`
  font-family: ${props => props.bold ?
          `${props.theme.typography.boldFontFamily}` : `${props.theme.typography.baseFontFamily}`};
  font-weight: ${props => props.bold ?
          `${props.theme.typography.boldFontWeight}` : `${props.theme.typography.baseFontWeight}`};
  font-size: ${props => getFontSize(props.size)};
  text-align: ${props => props.centered ?
          `center` : `left`};
  color: ${props => getColor(props.color)};
`;