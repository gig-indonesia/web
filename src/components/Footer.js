import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footerlink">
        <a href="#">Home</a>
        <a href="#">Search</a>
        <a href="#">Add</a>
        <a href="#">Gig</a>
        <a href="#">Notif</a>
      </div>
    );
  }
}

export default Footer;
