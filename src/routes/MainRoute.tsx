import React from "react";
import { Route, StaticRouter, Switch } from "react-router-dom";
import Event from "../containers/Event";
import Main from "../containers/Main";

const MainRoute = () => (
  <StaticRouter>
    <Switch>
      <Route exact={true} path="/" component={Main} />
      <Route path="/:event" component={Event} />
    </Switch>
  </StaticRouter>
);

export default MainRoute;
