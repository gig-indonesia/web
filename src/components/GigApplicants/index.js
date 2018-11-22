import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import ArtistBox from "../SmallComponents/ArtistBox";
class GigApplicants extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="applied-gig-container">
        <h1>Gig Applicants of Gig at Kemang</h1>
        <GigBox />
        <div className="applied-applicant-div">
          <h4>Approved Applicants</h4>
          <div>
            Approved applicants are artists that you have been approved to
            perform at this gig
          </div>
          <div className="applied-gig-artists">
            <ArtistBox />
            <ArtistBox />
            <ArtistBox />
          </div>
        </div>
        <div className="applied-applicant-div">
          <h4>Pending Applicants</h4>
          <div>
            Pending applicants are artists that you have been pending to perform
            at this gig
          </div>
          <div className="applied-gig-artists">
            <div className="artist-box">
              <ArtistBox />
              <div className="applied-gig-approval">
                <div>
                  <i class="fas fa-check" />
                </div>
                <div>
                  <i class="fas fa-times" />
                </div>
              </div>
            </div>
            <div className="artist-box">
              <ArtistBox />
            </div>
            <div className="artist-box">
              <ArtistBox />
            </div>
            <div className="artist-box">
              <ArtistBox />
            </div>
            <div className="artist-box">
              <ArtistBox />
            </div>
            <div className="artist-box">
              <ArtistBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GigApplicants;
