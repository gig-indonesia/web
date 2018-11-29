import React, { Component } from "react";
import avatarImg from "../../asset/avatar.png";
import concertimg from "../../asset/concert.jpg";
import Axios from "axios";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ""
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/artist/search", {
      headers: {
        id: this.props.match.params.id
      }
    })
      .then(res => {
        console.log(res);
        this.setState({
          artist: res.data
        });
      })
      .catch();
  }

  render() {
    const imgLink = this.state.artist.photo;
    const avatar = `https://s3.us-east-2.amazonaws.com/gigfiles/${imgLink}`;
    return (
      <React.Fragment>
        <img className="profile-cover" src={concertimg} alt="concert" />
        <div className="profile-content">
          <div className="avatar-container">
            <img
              className="profile-avatar"
              src={this.state.artist.photo ? avatar : avatarImg}
              alt="adam"
            />
            <div>
              <h3>{this.state.artist.name}</h3>
            </div>
            <div>
              <p>
                {this.state.artist.type === "solo"
                  ? "Solo Musician"
                  : "Group / Band"}
              </p>
            </div>
          </div>
        </div>

        {this.state.artist.description ? (
          <div className="container-info">
            <h2>About</h2>
            <hr />
            <p className="detail-description">
              {this.state.artist.description}
            </p>
          </div>
        ) : (
          <div className="container-info">
            <h2>About</h2>
            <hr />
            <p className="detail-description">
              This artist hasn't update any description.
            </p>
          </div>
        )}

        <div className="container-info">
          <h2>Contact</h2>
          <hr />
          <p className="detail-description">
            {this.state.artist.email && (
              <React.Fragment>Email : {this.state.artist.email}</React.Fragment>
            )}
            {this.state.artist.phone && (
              <React.Fragment>Phone : {this.state.artist.phone}</React.Fragment>
            )}
          </p>
        </div>

        {this.state.artist.video && (
          <div className="container-info">
            <p className="detail-description">
              <a href={this.state.artist.video}>
                <button>See Performance Video</button>
              </a>
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Artist;
