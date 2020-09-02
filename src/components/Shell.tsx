import React, { lazy, Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { colors } from "@theme/variables";

import MainMenu from "@components/layout/MainMenu";

import useShell from "./Shell.hook";

function Shell() {
  const { isMenuOpen, toggleMenu } = useShell();

  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        backgroundColor: colors["cream-tusk"],
        position: "relative",
      }}
    >
      <MainMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div>
        <button onClick={toggleMenu}>toggleMenu</button>
        <Link to="/second-page">go to second page</Link>
      </div>

      <Switch>
        <Route exact path="/" render={() => <p>primeira página</p>} />
        <Route path="/second-page" render={() => <p>segunda página</p>} />
        <Route path="*" render={() => <p>falhou</p>} />
      </Switch>
    </div>
  );
}

export default hot(Shell);
