import React, { Component } from "react";
import "./index.css";
import artistImg from "../../../asset/artist.jpeg";
import { Link } from "react-router-dom";

class ArtistBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to={`/artists/${this.props.newArtists.id}`}>
        <div className="artist-box-container">
          <img src={artistImg} alt="artist" width="100%" />
          {<h5>{this.props.newArtists.name.substring(0, 23)}</h5>}
          <div className="artist-padding-bottom" />
        </div>
      </Link>
    );
  }
}

export default ArtistBox;
