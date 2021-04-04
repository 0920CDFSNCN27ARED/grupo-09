import "./App.css";

import SideMenu from "./components/side-menu/SideMenu";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Products from "./components/views/products/Products";
import Users from "./components/views/users/Users";
import Dashboard from "./components/views/dashboard/Dashboard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <SideMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <Router>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/products" component={Products} />
                <Route path="/users" component={Users} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
