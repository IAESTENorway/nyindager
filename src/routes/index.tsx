import { About } from "components/About";
import Footer from "components/Footer";
import Header from "components/Header";
import Main from "containers/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";
import OslRouter from "./oslo";
import StvRouter from "./stavanger";
import TrdRouter from "./trondheim";

const Router = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/trondheim" component={TrdRouter} />
        <Route path="/oslo" component={OslRouter} />
        <Route path="/stavanger" component={StvRouter} />
      </Switch>
    </main>
    <Footer />
  </>
);

export default Router;
