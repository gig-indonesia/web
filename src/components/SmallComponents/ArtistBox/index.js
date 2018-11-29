import React, { Component } from "react";
import "./index.css";
import avatarImg from "../../../asset/avatar.png";
import { Link } from "react-router-dom";

class ArtistBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photo } = this.props.newArtists;
    // if (this.props.newArtists.photo) {
    //   console.log(
    //     `https://s3.us-east-2.amazonaws.com/gigfiles/${
    //       this.props.newArtists.photo
    //     }`
    //   );
    // } else {
    //   console.log("defautl");
    // }
    return (
      <Link to={`/artists/${this.props.newArtists.id}`}>
        <div className="artist-box-container">
          <img
            src={
              photo
                ? `https://s3.us-east-2.amazonaws.com/gigfiles/${photo}`
                : avatarImg
            }
            alt="artist"
            width="100%"
          />
          {<h5>{this.props.newArtists.name.substring(0, 23)}</h5>}
          <div className="artist-padding-bottom" />
        </div>
      </Link>
    );
  }
}

export default ArtistBox;
