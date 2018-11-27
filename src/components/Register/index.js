import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Axios from "axios";

class Register extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       email: "",
  //       username: "",
  //       name: "",
  //       password: ""
  //     };
  //   }
  //   onChange = e => {
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };

  //   register = e =>{
  // e.preventDefault();
  // console.log(this.state);
  // Axios.post(`https://gig-id.herokuapp.com/accounts/register`,{
  // email: this.state.email,
  // username: this.state.username,
  // name: this.state.name,
  // password: this.state.password
  // })
  // .then(data => data)
  //   }

  render() {
    return (
      <div className="login-container">
        <form>
          <div>
            <div className="register-type-in">
              <input
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                placeholder="email"
                type="text"
              />
              <input
                onChange={this.onChange}
                value={this.state.username}
                name="username"
                placeholder="User Name"
                type="text"
              />
              <input
                onChange={this.onChange}
                value={this.state.name}
                name="name"
                placeholder="Name"
                type="type"
              />
              <input
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                placeholder=" Password"
                type="password"
              />
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
