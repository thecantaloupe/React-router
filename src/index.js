import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";

// I guess you can make elements into var and throw in, the more you know
const rootElement = document.getElementById("root")
//Wrap the App Component with the Router component to enable the router features
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);

