import React, { Component } from "react";
import "./index.css";
import img from "../../../asset/rest.jpg";
import { Link } from "react-router-dom";

class GigBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Link to={`/gigs/${this.props.newGigs.id}`}>
        <div className="gig-container">
          <div className="gig-photo">
            <img src={img} alt="rest" />
          </div>
          <div>
            <h3>{this.props.newGigs.title}</h3>
            <p>{this.props.newGigs.location}</p>
            <div className="gig-price">
              <span className="price-logo">
                <i className="fas fa-money-bill" />
              </span>
              <div>{`Rp. ${this.props.newGigs.budget
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default GigBox;
