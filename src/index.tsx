import React from 'react';
import { hydrate, render } from 'react-dom';

import App from './components/App';


// if pre-rendered content exists, just use hydrate
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}