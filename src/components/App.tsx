import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Global } from "@emotion/react";
import baseStyles from "@theme/baseStyles";

import Shell from "./Shell";

const customHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={customHistory}>
      <Global styles={baseStyles} />
      <Shell />
    </Router>
  );
};
export default App;
