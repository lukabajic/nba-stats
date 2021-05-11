import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Index from "./pages/Index";
import Player from "./pages/Player";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/player/:id" exact component={Player} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
