import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/";
import Home from "./components/Home";
import Gigs from "./components/Gigs";
import Search from "./components/Search";
import Add from "./components/Add";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="background">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/add" component={Add} />
              <Route exact path="/gigs" component={Gigs} />
            </Switch>
            <div className="margin-bottom" />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
