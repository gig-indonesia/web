import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { isAuth } from "../../action/isAuthAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`https://gig-id.herokuapp.com/accounts/login`, {
        login: this.state.username,
        password: this.state.password
      })
      .then(data => {
        console.log(data.data);
        this.props.isAuth();
        localStorage.setItem("token", data.data.token);
        this.props.history.push("/");
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.login}>
          <div>
            <div className="login-type-in">
              <h1>Login</h1>
              <input
                onChange={this.onChange}
                value={this.state.username}
                name="username"
                placeholder="email or user name"
                type="text"
              />
            </div>
            <div className="login-type-in">
              <input
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                placeholder="password"
                type="password"
              />
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

export default connect(
  null,
  { isAuth }
)(Login);
