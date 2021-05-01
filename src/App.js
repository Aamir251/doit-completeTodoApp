import useAuth from "./hooks/useAuth"
import Features from "./comps/Features"
import Home from "./comps/Home"
import Navbar from "./comps/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./comps/Login";

import { useState } from "react";

const RouterSetup = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Home />
        <Features />
      </Route>
      <Route exact path="/login">
        <Navbar />
        <Login />
      </Route>
    </Switch>
  </Router>
}

function App() {

  const { currentUser } = useAuth()
  console.log(currentUser);

  return (
    <RouterSetup />
  );
}

export default App;
