import Features from "./comps/Features"
import Home from "./comps/Home"
import Navbar from "./comps/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./comps/Form";

import { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { FirestoreProvider } from "./contexts/FirestoreContext"
import Dashboard from "./comps/Dashboard";

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
        <Form formType={'login'} />
      </Route>
      <Route exact path="/signup">
        <Navbar />
        <Form formType={'signup'} />
      </Route>
      <Route exact path="/mydashboard">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
}

function App() {

  return (
    <AuthProvider>

      <RouterSetup />
    </AuthProvider>
  );
}

export default App;
