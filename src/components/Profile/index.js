import React, { Component } from "react";
import "./index.css";
import adamimg from "../../asset/adam.jpg";
import concertimg from "../../asset/concert.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    localStorage.removeItem("token");
  };

  componentDidMount() {
    axios.get(`https://gig-id.herokuapp.com/accounts/login`);
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
        <div className="container-info">
          <p className="title-description">About</p>
          <hr />
          <p className="detail-description">
            into music for about 3 years, music is part of my life. with gig app
            helped me out to find away doing my hobby become my job I think
            doing hobby while you get money it's a dream job!{" "}
          </p>
        </div>
        <div className="container-info">
          <p className="title-description">skills</p>
          <hr />
          <p className="detail-description">
            playing guitar and sing it's my strange{" "}
          </p>
        </div>
        <div className="container-info">
          <p className="title-description">About</p>
          <hr />
          <p className="detail-description">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,{" "}
          </p>
        </div>
        <button onClick={this.logout}>Log Out</button>
        <Link to="/edit-profile">Edit Profile</Link>
      </div>
    );
  }
}

export default Profile;
