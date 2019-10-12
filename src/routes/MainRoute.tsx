import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Route, StaticRouter, Switch } from "react-router-dom";
import Event from "../containers/Event";
import Main from "../containers/Main";

const MainRoute = () => (
  <StaticRouter>
    <Header />
    <main>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/:event" component={Event} />
      </Switch>
    </main>
    <Footer />
  </StaticRouter>
);

export default MainRoute;
