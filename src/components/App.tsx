import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Global } from "@emotion/core";
import baseStyles from "@theme/baseStyles";

import Shell from "./Shell";

const customHistory = createBrowserHistory();

export default function App() {
  return (
    <Router history={customHistory}>
      <Global styles={baseStyles} />
      <Shell />
    </Router>
  );
}
