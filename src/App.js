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
import CreatedGig from "./components/CreatedGig";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GigApplicants from "./components/GigApplicants";
import axios from "axios";
import { isAuth } from "./action/isAuthAction";
import { connect } from "react-redux";
import Artist from "./components/Artist";

class App extends Component {
  // componentDidMount() {
  //   const API_KEY = process.env.GOOGLE_API_KEY;

  //   const script = document.createElement("script");
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
  //   document.head.append(script);
  // }

  async componentDidMount() {
    const token = await localStorage.getItem("token");
    axios
      .get(`http://localhost:5000/accounts/me`, {
        headers: { authorization: `Bearer ${token}` }
      })
      .then(data => {
        console.log(data);
        this.props.isAuth();
      })
      .catch(err => console.log(err));
  }

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
                <Route exact path="/gigs/:id" component={CreatedGig} />
                <Route exact path="/artists/:id" component={Artist} />
                <Route
                  exact
                  path="/gigs/:id/applicants"
                  component={GigApplicants}
                />
              </Switch>
            </div>
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { isAuth }
)(App);
