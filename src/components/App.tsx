import React, { lazy, Suspense } from "react";
import { Route, Router, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { hot } from 'react-hot-loader/root';


// Components
import Header from '@components/layout/Header';
import HomePage from "./pages/Home";
import GlobalStyles from "@components/styled-components/GlobalStyles";
const SecondPage = lazy(() => import('./pages/SecondPage'));


const customHistory = createBrowserHistory();


function App() {
  return (
    <Router history={customHistory}>
      <GlobalStyles />
      <Header>
        heades
      </Header>
      <div>
        <p>header</p>
        <Link to="/">main page</Link>
        <Link to="/second-page" >Second page</Link>
      </div>
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
