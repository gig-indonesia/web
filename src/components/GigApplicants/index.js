import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import ArtistBox from "../SmallComponents/ArtistBox";
import Axios from "axios";

class GigApplicants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gig: ""
    };
  }

  handleApprove = e => {
    console.log(e.target.value);
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure want to approve this artist?")) {
      Axios.put(
        "http://localhost:5000/apply",
        {
          status: "approved",
          gigsId: this.state.gig.id,
          artistId: e.target.value
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then(res => this.handleRead())
        .catch(err => console.log(err));
    }
  };

  handleReject = e => {
    console.log(e.target.value);
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure want to reject this artist?")) {
      Axios.put(
        "http://localhost:5000/apply",
        {
          status: "rejected",
          gigsId: this.state.gig.id,
          artistId: e.target.value
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then(res => this.handleRead())
        .catch(err => console.log(err));
    }
  };

  componentDidMount() {
    this.handleRead();
  }

  handleRead = e => {
    const token = localStorage.getItem("token");
    Axios.get(`http://localhost:5000/gigs/${this.props.match.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          gig: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const artists = this.state.gig.Artists || [];
    let approved = null;
    let pending = null;
    if (artists.length > 0) {
      approved = this.state.gig.Artists.filter(
        artist => artist.Applicant.status === "approved"
      );
      pending = this.state.gig.Artists.filter(
        artist => artist.Applicant.status === "pending"
      );
    } else {
      approved = [];
      pending = [];
    }

    return (
      <div className="applied-gig-container">
        <h1>Gig Applicants</h1>
        <GigBox newGigs={this.state.gig} />
        <div className="applied-applicant-div">
          <h4>Approved Applicants</h4>
          <div>
            Approved applicants are artists that you have been approved to
            perform at this gig
          </div>
          <div className="applied-gig-artists">
            {approved.length > 0 &&
              approved.map((artist, index) => (
                <div
                  className="applied-artist-box"
                  key={`approvedArtist-${index}`}
                >
                  <ArtistBox newArtists={artist} />
                </div>
              ))}
          </div>
          {approved.length === 0 && (
            <div className="empty-approved">There is no approved applicant</div>
          )}
        </div>
        <div className="applied-applicant-div">
          <h4>Pending Applicants</h4>
          <div>
            Pending applicants are artists that recently applied to perform at
            this gig, you can approve or reject them by clicking the buttons
          </div>
          <div className="applied-gig-artists">
            {pending.length > 0 &&
              pending.map((artist, index) => (
                <div
                  className="applied-artist-box"
                  key={`pendingArtist-${index}`}
                >
                  <ArtistBox newArtists={artist} />
                  <div className="applied-gig-approval">
                    <button
                      value={artist.Applicant.artistId}
                      className="applied-approve"
                      onClick={this.handleApprove}
                    >
                      <i
                        value={artist.Applicant.artistId}
                        className="fas fa-check"
                      />
                    </button>
                    <button
                      value={artist.Applicant.artistId}
                      className="applied-reject"
                      onClick={this.handleReject}
                    >
                      <i
                        value={artist.Applicant.artistId}
                        className="fas fa-times"
                      />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          {pending.length === 0 && (
            <div className="empty-approved">There is no pending applicant</div>
          )}
        </div>
      </div>
    );
  }
}

export default GigApplicants;
