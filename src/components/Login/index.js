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
      password: "",
      message: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post(`https://gig-id.herokuapp.com/accounts/login`, {
        login: this.state.username,
        password: this.state.password
      })
      .then(data => {
        if (data.data.message === "You are logged in") {
          this.props.isAuth();
          localStorage.setItem("token", data.data.token);
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

  componentDidMount() {
    const headers = localStorage.getItem("token");
    console.log(headers);
    // axios
    //   .head(`https://gig-id.herokuapp.com/accounts/head`, { headers: headers })
    //   .then(data => {
    //     console.log(data);
    //     // this.props.isAuth();
    //     // this.props.history.push("/");
    //   })

    //   .catch(err => console.log(err));
  }

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
            {this.state.message === "invalid" && <div>Password is invalid</div>}
            {this.state.message === "notfound" && <div>Account not found</div>}
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
