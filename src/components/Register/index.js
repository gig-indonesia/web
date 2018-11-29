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
      accountType: "",
      confirmPassword: "",
      notMatch: false
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAccType = e => {
    this.setState({
      accountType: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.accountType === "") {
      alert("you must choose your role");
      return;
    }

    if (this.state.confirmPassword === this.state.password) {
      const data = {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      };

      console.log(data);
      Axios.post("http://localhost:5000/accounts/register", data)
        .then(res => {
          const artistProfile = {
            name: "New Artist",
            type: "solo",
            photo: null,
            video: null,
            about: "",
            email: this.state.email,
            phone: "",
            accountId: res.data.id
          };

          const hostProfile = {
            name: "New Host",
            company: "",
            email: this.state.email,
            accountId: res.data.id
          };

          const profile =
            this.state.accountType === "Artist" ? artistProfile : hostProfile;

          const endpoint =
            this.state.accountType === "Artist" ? "artist" : "host";

          Axios.post(`http://localhost:5000/${endpoint}`, profile)
            .then(res2 => {
              console.log(res2);
              this.props.history.push("/login");
            })
            .catch(err => console.log(err));
          console.log(res.data.id);
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        notMatch: true
      });
    }
  };
  render() {
    return (
      <div className="login-container">
        <form onSubmit={e => e.preventDefault()}>
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
              <div className="regtype">
                <input
                  type="radio"
                  name="regtype"
                  id="regArtist"
                  value="Artist"
                  onClick={this.handleAccType}
                />
                <label htmlFor="regArtist">as Artist</label>
                <input
                  type="radio"
                  name="regtype"
                  id="regHost"
                  value="Host"
                  onClick={this.handleAccType}
                />
                <label htmlFor="regHost">as Host</label>
              </div>
            </div>
            {this.state.notMatch === true ? (
              <div className="login-warning">Password do not match</div>
            ) : (
              <div />
            )}
            <button className="register-button" onClick={this.handleSubmit}>
              Submit
            </button>

            <div className="small-link">
              Already Have Account?
              <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
