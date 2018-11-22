import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login-container">
        <form>
          <div>
            <div className="register-type-in">
              <input name="email" placeholder="email" type="text" />
              <input name="user name" placeholder="User Name" type="text" />
              <input name="name" placeholder="Name" type="type" />
              <input name="password" placeholder=" Password" type="password" />
              <input
                name="password"
                placeholder="Confirm password"
                type="password"
              />
            </div>

            <button className="register-button">Submit</button>

            <div className="small-link">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
