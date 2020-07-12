import { createGlobalStyle } from 'styled-components';
import typography from '@theme/typography';
import cssVariables from '@theme/cssVariables';

// component that defines base/global layout definitions
export default createGlobalStyle`
  ${cssVariables}
  *,
  *::before,
  *::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  ${typography}
`;