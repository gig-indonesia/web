import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      confirmPassword: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.confirmPassword === this.state.password) {
      const data = {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      };
      console.log(data);
      Axios.post("https://gig-id.herokuapp.com/accounts/register", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else {
      alert("password not match");
    }
  };

  render() {
    return (
      <div className="login-container">
        <form>
          <div>
            <div className="register-type-in">
              <input
                name="email"
                placeholder="email"
                type="text"
                onChange={this.handleOnChange}
                value={this.state.email}
              />
              <input
                name="username"
                placeholder="username"
                type="text"
                onChange={this.handleOnChange}
                value={this.state.username}
              />
              <input
                name="password"
                placeholder=" Password"
                type="password"
                onChange={this.handleOnChange}
                value={this.state.password}
              />
              <input
                name="confirmPassword"
                placeholder="Confirm password"
                type="password"
                onChange={this.handleOnChange}
                value={this.state.confirmPassword}
              />
            </div>

            <button className="register-button" onClick={this.handleSubmit}>
              Submit
            </button>

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
