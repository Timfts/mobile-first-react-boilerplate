import React, { lazy, Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

// Components
import Header from "@components/layout/Header";
import MainMenu from "@components/layout/MainMenu";
import HomePage from "./pages/Home";

import useShell from "./Shell.hook";
import S from "./Shell.styled";

const SecondPage = lazy(() => import("./pages/SecondPage"));

function Shell() {
  const { toggleMenu, isMenuOpen } = useShell();

  return (
    <S.Root>
      {/* <Header onOpenMenu={toggleMenu} isMenuOpen={isMenuOpen} /> */}
      <S.Headercontainer>
        <p>cenourinha</p>
        <Link to="/second-page">go to second page</Link>
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
  );
}

export default hot(Shell);
