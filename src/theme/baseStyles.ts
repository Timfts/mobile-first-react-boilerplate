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
    height:100vh;
  }

  #root {
    width:100%;
    height:100%;
    position:relative;
  }
`;
