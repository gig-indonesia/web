import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/";
import Home from "./components/Home";
import Gigs from "./components/Gigs";
import Search from "./components/Search";
import Add from "./components/Add";
import Notifications from "./components/Notifications";

import Profile from "./components/Profile";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="background">
          <div className="container">
            <Header />
            <div className="fit">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/gigs" component={Gigs} />
                <Route exact path="/notifications" component={Notifications} />
                <Route exact path="/login" component={Login} />

                <Route exact path="/register" component={Register} />

                <Route exact path="/profile" component={Profile} />
              </Switch>
            </div>
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
