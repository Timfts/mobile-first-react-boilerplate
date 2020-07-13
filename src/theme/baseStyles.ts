import { css } from "styled-components";

export default css`
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
    position: relative;
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
`;
