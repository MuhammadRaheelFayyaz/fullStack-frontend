import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/signUp";
import HomePage from "./components/home";
import Signin from "./components/signin";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  );
}

export default App;
