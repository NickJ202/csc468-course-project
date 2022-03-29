import {createGlobalStyle} from "styled-components";

import * as SC from "../styling-config";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.colors.viewBackground};
  }

  h1, h2, h3, h4, h5, h6, a, p, span, li, label {
    margin: 0;
    color: ${props => props.theme.colors.font.primary};
    font-weight: ${props => props.theme.typography.regularFontWeight};
    
  }
  
  h1, h2 {
    font-weight: ${props => props.theme.typography.boldFontWeight};
  }

  h1 {
    font-size: ${props => props.theme.typography.size.h1};
    color: ${props => props.theme.colors.font.secondary};
  }

  h2 {
    font-size: ${props => props.theme.typography.size.h2};
  }

  p {
    font-size: ${props => props.theme.typography.size.base};
  }
  
  a, span, li, input {
    font-size: ${props => props.theme.typography.size.small};
  }

  a {
    color: ${props => props.theme.colors.font.active};
    font-weight: ${props => props.theme.typography.boldFontWeight};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  b {
    font-weight: ${props => props.theme.typography.boldFontWeight};
  }
  
  label {
    font-size: ${props => props.theme.typography.size.xSmall};
  }
  
  ul, ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  input, button, textarea {
    font-size: ${props => props.theme.typography.size.small};
    font-weight: ${props => props.theme.typography.boldFontWeight};
    font-family: ${props => props.theme.typography.fontFamily};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  
  input, textarea {
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid ${props => props.theme.colors.border.primary};
    height: 42.5px;
    margin: 0;
    padding: 10px;
  }

  textarea {
    resize: none;
    height: 170px;
  }

  button {
    margin: 0;
    padding: 0 0 2px 0;
    border: none;
    height: ${SC.STYLING.buttonHeight};
    width: ${SC.STYLING.buttonWidth};
    background: ${props => props.theme.colors.transparent};
    &:hover{
      cursor: pointer;
    }
  }

  * {
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

`