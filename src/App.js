import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Home from "./components/Home";
import SignUp from "./components/forms/SignUp";
import ShippingAdd from "./components/forms/ShippingAdd";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/shipping-add" component={ShippingAdd} />
      </Switch>
    </Router>
  );
};

export default App;
