import React, { Component } from "react";
import "./index.css";
import artistImg from "../../artist.jpeg";

class ArtistBox extends Component {
  render() {
    return (
      <div>
        <img src={artistImg} alt="artist" width="100%" />
      </div>
    );
  }
}

export default ArtistBox;
