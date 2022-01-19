import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { colors } from "@theme/variables";

import Header from "@components/layout/Header";
import MainMenu from "@components/layout/MainMenu";

import useShell from "./Shell.hook";

const Shell: React.FC = () => {
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
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MainMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Switch>
        <Route exact path="/" render={() => <p>primeira página</p>} />
        <Route path="/second-page" render={() => <p>segunda página</p>} />
        <Route path="*" render={() => <p>falhou</p>} />
      </Switch>
    </div>
  );
};

export default hot(Shell);
