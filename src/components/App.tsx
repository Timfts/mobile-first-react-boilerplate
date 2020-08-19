import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { hot } from "react-hot-loader/root";

// Components
import GlobalStyles from "@components/styled-components/GlobalStyles";
import Header from "@components/layout/Header";
import MainMenu from "@components/layout/MainMenu";
import HomePage from "./pages/Home";

import useApp from "./App.hook";
import S from "./App.styled";

const SecondPage = lazy(() => import("./pages/SecondPage"));
const customHistory = createBrowserHistory();

function App() {
  const { toggleMenu, isMenuOpen } = useApp();

  return (
    <Router history={customHistory}>
      <GlobalStyles />
      <S.Root>
        {/* <Header onOpenMenu={toggleMenu} isMenuOpen={isMenuOpen} /> */}
        <S.Headercontainer>
          
        </S.Headercontainer>
        <MainMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/second-page" component={SecondPage} />
            <Route path="*" render={() => <p>falhou</p>} />
          </Switch>
        </Suspense>
      </S.Root>
    </Router>
  );
}

export default hot(App);
