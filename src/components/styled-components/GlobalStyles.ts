import { createGlobalStyle } from 'styled-components';
import cssVariables from '@theme/cssVariables';
import typography from '@theme/typography';
import baseStyles from '@theme/baseStyles';

// component that defines base/global layout definitions
export default createGlobalStyle`
  ${cssVariables}
  ${baseStyles}
  ${typography}
`;