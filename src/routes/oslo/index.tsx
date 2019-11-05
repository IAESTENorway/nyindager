import { About } from "components/About";
import Event from "containers/Event";
import Main from "containers/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";

const OslRouter = () => (
  <Switch>
    <Route exact={true} path="/oslo/">
      <Main city="oslo" />
    </Route>
    <Route path="/oslo/about">
      <About city="oslo" />
    </Route>
    <Route path="/oslo/:event" component={Event} />
  </Switch>
);

export default OslRouter;
