import React from "react";
import { Router, Route, Switch } from "dva/router";
// import IndexPage from "./routes/IndexPage";

import Loadable from 'react-loadable';

const LoadableBar = Loadable({
  loader: () => import('./routes/IndexPage'),
  loading() {
    return <div>Loading...</div>
  }
});
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          exact
          component={() => <LoadableBar />}
        />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
