import React, { lazy, Fragment, Suspense } from "react";
import { Route, Router, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from "history";


// Components
import HomePage from "./pages/Home";
import GlobalStyles from "@components/styled-components/GlobalStyles";
const SecondPage = lazy(() => import('./pages/SecondPage'));


const customHistory = createBrowserHistory();


export default function App() {
  return (
    <Fragment>
      <Router history={customHistory}>
        <GlobalStyles />
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
    </Fragment>
  );
}


