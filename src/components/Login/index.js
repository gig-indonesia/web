import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import GIG1 from "../../asset/gigid1.png";

import { connect } from "react-redux";
import { isAuth } from "../../action/isAuthAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  };

  login = e => {
    e.preventDefault();
    axios
      .post(`https://gig-id.herokuapp.com/accounts/login`, {
        login: this.state.username,
        password: this.state.password
      })
      .then(data => {
        console.log(data);
        if (data.data.message) {
          this.props.isAuth();
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("type", data.data.accountType);
          this.props.history.push("/");
        } else if (data.data === "account not found") {
          this.setState({
            message: "notfound"
          });
        } else if (data.data === "password is not valid") {
          this.setState({
            message: "invalid"
          });
        }
      })

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.login}>
          <div>
            <img src={GIG1} alt="giglogo" />
            <div className="login-box">
              <div className="login-type-in">
                <h2>Login</h2>
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
              {this.state.message === "invalid" && (
                <div className="login-warning">Password is invalid</div>
              )}
              {this.state.message === "notfound" && (
                <div className="login-warning">Account not found</div>
              )}
              <div className="small-link">
                <Link to="/register">Sign Up Now!</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthState: state.isAuth.isAuth
});

export default connect(
  mapStateToProps,
  { isAuth }
)(Login);
