import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login-container">
        <form>
          <div>
            <div className="login-type-in">
              <input
                name="email or user name"
                placeholder="email or user name"
                type="text"
              />
            </div>
            <div className="login-type-in">
              <input name="password" placeholder="password" type="password" />
            </div>
            <button className="login-button">Login</button>

            <div className="small-link">
              <Link to="#">Sign Up Now!</Link>
              <Link to="#">forgot password?</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
