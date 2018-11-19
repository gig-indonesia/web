import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <div className="footernav">
          <Link to="/">
            <span className="footerIcon">
              <i class="fas fa-home" />
            </span>
          </Link>

          <Link to="/search">
            <span className="footerIcon">
              <i class="fas fa-search" />
            </span>
          </Link>

          <Link to="/add">
            <span className="footerIcon">
              <i class="fas fa-plus" />
            </span>
          </Link>

          <Link to="/gigs">
            <span className="footerIcon">
              <i class="fas fa-music" />
            </span>
          </Link>

          <Link to="/notifications">
            <span className="footerIcon">
              <i class="far fa-bell" />
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
