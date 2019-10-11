import React from "react";
import ReactDOM from "react-dom";
import "./Core/index.css";
import App from "./Core/App";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
