import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";

class Gigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArtists: [],
      newGigs: []
    };
  }
  render() {
    return (
      <div className="gigs-container">
        <h2>Your Gigs</h2>
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
      </div>
    );
  }
}

export default Gigs;
