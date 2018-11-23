import React, { Component } from "react";
import "./index.css";
import artistImg from "../../../asset/artist.jpeg";

class ArtistBox extends Component {
  render() {
    return (
      <div className="artist-box-container">
        <img src={artistImg} alt="artist" width="100%" />
      </div>
    );
  }
}

export default ArtistBox;
