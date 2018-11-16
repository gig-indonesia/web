import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <div className="footernav">
          <a href="#">Home</a>
          <a href="#">Search</a>
          <a href="#">Add</a>
          <a href="#">Gig</a>
          <a href="#">Notif</a>
        </div>
      </div>
    );
  }
}

export default Footer;
