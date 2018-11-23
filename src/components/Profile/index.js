import React, { Component } from "react";
import "./index.css";
import adamimg from "../../asset/adam.jpg";
import concertimg from "../../asset/concert.jpg";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profile-container">
        <img className="profile-cover" src={concertimg} alt="concert" />
        <div className="profile-content">
          <div className="avatar-container">
            <img className="profile-avatar" src={adamimg} alt="adam" />
            <div>
              <h3>The Adam's</h3>
            </div>
            <div>
              <p>Solo Musician</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
