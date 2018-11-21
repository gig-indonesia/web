import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="footer">
        <div className="footernav">
          <Link to="/">
            <span
              className={classNames("footerIcon", pathname === "/" && "active")}
            >
              <i className="fas fa-home" />
            </span>
          </Link>

          <Link to="/search">
            <span
              className={classNames(
                "footerIcon",
                pathname === "/search" && "active"
              )}
            >
              <i className="fas fa-search" />
            </span>
          </Link>

          <Link to="/add">
            <span
              className={classNames(
                "footerIcon",
                pathname === "/add" && "active"
              )}
            >
              <i className="fas fa-plus" />
            </span>
          </Link>

          <Link to="/gigs">
            <span
              className={classNames(
                "footerIcon",
                pathname === "/gigs" && "active"
              )}
            >
              <i className="fas fa-music" />
            </span>
          </Link>

          <Link to="/notifications">
            <span
              className={classNames(
                "footerIcon",
                pathname === "/notifications" && "active"
              )}
            >
              <i className="far fa-bell" />
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
