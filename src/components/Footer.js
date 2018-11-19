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
          <a href="/">
            <span className="footerIcon">
              <i class="fas fa-home" />
            </span>
          </a>

          <a href="/">
            <span className="footerIcon">
              <i class="fas fa-search" />
            </span>
          </a>

          <a href="/">
            <span className="footerIcon">
              <i class="fas fa-plus" />
            </span>
          </a>

          <a href="/">
            <span className="footerIcon">
              <i class="fas fa-music" />
            </span>
          </a>

          <a href="/">
            <span className="footerIcon">
              <i class="far fa-bell" />
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
