import { TrdAbout } from "components/About";
import Event from "containers/Event";
import Main from "containers/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";

const TrdRouter = () => (
  <Switch>
    <Route exact={true} path="/trondheim/">
      <Main city="trondheim" />
    </Route>
    <Route path="/trondim/about" component={TrdAbout} />
    <Route path="/trondheim/:event" component={Event} />
  </Switch>
);

export default TrdRouter;
