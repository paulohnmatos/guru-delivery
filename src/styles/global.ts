import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.palette.background.default};
    color: ${(props) => props.theme.palette.text.primary};
    font: 400 ${(props) => props.theme.typography.fontSize}px ${(props) =>
  props.theme.typography.fontFamily};
  }
`;
