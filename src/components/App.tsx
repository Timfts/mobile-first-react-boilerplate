import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import GlobalStyles from "@components/styled-components/GlobalStyles";
import Shell from "./Shell";

const customHistory = createBrowserHistory();

export default function App() {
  return (
    <Router history={customHistory}>
      <GlobalStyles />
      <Shell />
    </Router>
  );
}
