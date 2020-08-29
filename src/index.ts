import React from "react";
import { hydrate, render } from "react-dom";

import App from "./components/App";

const AppComponent = React.createElement(App, null);

// if pre-rendered content exists, just use hydrate
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(AppComponent, rootElement);
} else {
  render(AppComponent, rootElement);
}
