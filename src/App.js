import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import "./App.css";

function App() {
  const [alert, setAlert] = useState(null);

  const specAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home setAlertAppJS={specAlert} />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
