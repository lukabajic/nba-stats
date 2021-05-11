import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Index from "./pages/Index";
import Player from "./pages/Player";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/player/:id" exact component={Player} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
