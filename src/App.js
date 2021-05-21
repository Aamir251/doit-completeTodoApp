import Features from "./comps/Features"
import Home from "./comps/Home"
import Navbar from "./comps/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./comps/Form";


import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./comps/Dashboard";

const RouterSetup = () => {


  return <Router>
  <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
        <Features />
      </Route>
      <Route exact path="/login">
        <Form formType={'login'} />
      </Route>
      <Route exact path="/signup">
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
