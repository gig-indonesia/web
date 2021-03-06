import React, { Component } from "react";
import "./index.css";
import avatarImg from "../../asset/avatar.png";
import concertimg from "../../asset/concert.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../action/isAuthAction";
import Axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      artist: ""
    };
  }

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    this.props.logout();
    this.props.history.push("/");
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (this.props.isAuthState === false) {
      this.props.history.push("/login");
    } else {
      Axios.get("https://gig-id.herokuapp.com/artist/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          console.log(res);
          this.setState({
            artist: res.data
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const type = localStorage.getItem("type");
    return (
      <div className="profile-container">
        {type === "Artist" && (
          <React.Fragment>
            <img className="profile-cover" src={concertimg} alt="concert" />
            <div className="profile-content">
              <div className="avatar-container">
                <img
                  className="profile-avatar"
                  src={
                    this.state.artist.photo
                      ? `https://s3.us-east-2.amazonaws.com/gigfiles/${
                          this.state.artist.photo
                        }`
                      : avatarImg
                  }
                  alt="artistPhoto"
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

            <Link to="/edit-profile">
              <div className="edit-profile">
                <button className="edit-button">Edit Profile</button>
              </div>
            </Link>

            {this.state.artist.about ? (
              <div className="container-info">
                <h2>About</h2>
                <hr />
                <p className="detail-description">{this.state.artist.about}</p>
              </div>
            ) : (
              <div className="container-info">
                <h2>About</h2>
                <hr />
                <p className="detail-description">
                  You have no any description
                </p>
              </div>
            )}

            <div className="container-info">
              <h2>Contact</h2>
              <hr />
              <div className="detail-description">
                {this.state.artist.email && (
                  <div>Email : {this.state.artist.email}</div>
                )}
                {this.state.artist.phone && (
                  <div>Phone : {this.state.artist.phone}</div>
                )}
              </div>
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
        )}
        {type === "Host" && (
          <React.Fragment>
            You are a host, you dont need any profile
          </React.Fragment>
        )}
        <button onClick={this.logout} className="logout-button">
          Log Out
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthState: state.isAuth.isAuth
});

export default connect(
  mapStateToProps,
  { logout }
)(Profile);
