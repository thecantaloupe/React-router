import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Stocks from "./Stocks";
import Dashboard from "../components/Dashboard";
import stockData from '../public/data';

const Main = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={(props) => <Stocks stoinks={stockData} {...props} />}
        />
        <Route 
          path="/stocks" 
          render={(props) => <Dashboard stoinks={stockData} {...props} />} />
      </Switch>
    </main>
  );
};

export default Main;
