import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { hot } from 'react-hot-loader/root';

import useApp from './App.hook';


// Components
import Header from '@components/layout/Header';
import GlobalStyles from "@components/styled-components/GlobalStyles";
import HomePage from "./pages/Home";
const SecondPage = lazy(() => import('./pages/SecondPage'));


const customHistory = createBrowserHistory();


function App() {
  const { toggleMenu, isMenuOpen } = useApp();

  return (
    <Router history={customHistory}>
      <GlobalStyles />
      <Header onOpenMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/second-page" component={SecondPage} />
          <Route path="*" render={() => <p>falhou</p>} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default hot(App);
