import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header.js";
import Registration from "./components/registration/Registration.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <Registration />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
