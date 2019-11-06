import { About } from "components/About";
import Event from "containers/Event";
import Main from "containers/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";

const StvRouter = () => (
  <Switch>
    <Route exact={true} path="/stavanger/">
      <Main city="stavanger" />
    </Route>
    <Route path="/stavanger/about">
      <About city="stavanger" />
    </Route>
    <Route path="/stavanger/:event" component={Event} />
  </Switch>
);

export default StvRouter;
