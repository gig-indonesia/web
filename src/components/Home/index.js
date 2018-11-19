import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArtists: [],
      newGigs: []
    };
  }
  render() {
    return (
      <div className="home-container">
        <h2>New Artists</h2>
        <h2>New Gigs</h2>
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

export default Home;
