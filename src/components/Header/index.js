import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import Login from "./Components/Login";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1>GiG</h1>
        </Link>

        <Link to="/profile">
          <i className="fas fa-user-circle" />
        </Link>
        {/* <Login /> */}
      </div>
    );
  }
}

export default Header;
