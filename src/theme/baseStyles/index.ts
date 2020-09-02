import { css } from "@emotion/core";
import CSSvariables from "./cssVariables";
import typography from "./typography";

export default css`
  ${CSSvariables}
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  /* Remove blue highlight on touch elements on mobile chrome */
  input,
  textarea,
  button,
  select,
  div,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ${typography}
`;
