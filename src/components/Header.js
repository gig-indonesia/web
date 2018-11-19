import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <h1>Gig</h1>
        <a href="/">
          <i class="fas fa-user-circle" />
        </a>
      </div>
    );
  }
}

export default Header;
