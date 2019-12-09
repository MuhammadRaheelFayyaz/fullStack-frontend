import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/signUp";
import HomePage from "./components/home";
import Signin from "./components/signin";
import Header from "./components/header";
import Users from "./components/user";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/users/:key" component={Users} />
      </Switch>
    </>
  );
}

export default App;
