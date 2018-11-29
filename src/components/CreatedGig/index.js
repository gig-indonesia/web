import React, { Component, Fragment } from "react";
import "./index.css";
import { connect } from "react-redux";
import Axios from "axios";

class CreatedGig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gig: null,
      applied: false
    };
  }

  handleApplicant = e => {
    this.props.history.push(`/gigs/${this.props.match.params.id}/applicants`);
  };

  handleApply = e => {
    const token = localStorage.getItem("token");
    const data = {
      status: "pending",
      gigsId: this.state.gig.id
    };
    Axios.post("https://gig-id.herokuapp.com/apply", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res);
        this.setState({
          applied: true
        });
      })
      .catch(err => console.log(err));
    e.target.disabled = true;
  };

  componentDidMount() {
    const gig = this.props.newGigs.find(
      gig => gig.id === parseInt(this.props.match.params.id)
    );

    this.setState({ gig: gig });
  }
  render() {
    const type = localStorage.getItem("type");
    // console.log(this.state.gig.time);
    return (
      <div className="single-gig-container">
        {this.state.gig && (
          <Fragment>
            <div className="gig-image">
              <img
                src={`https://s3.us-east-2.amazonaws.com/gigfiles/${
                  this.state.gig.photo
                }`}
                alt="gig-images"
              />

              <div className="gig-info">
                <h1>{this.state.gig.title}</h1>
                <div className="gig-budget">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR"
                  }).format(this.state.gig.budget)}
                </div>
                <div>
                  {new Intl.DateTimeFormat("en-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    timeZone: "UTC"
                  }).format(new Date(this.state.gig.date))}
                </div>
                {/* <time dateTime="2018-02-14 20:00">
                  {this.state.gig.date} {this.state.gig.hour}
                </time> */}
              </div>
            </div>
            <h4>Description</h4>
            <div className="gig-desc">{this.state.gig.description}</div>
            <h4>Location</h4>
            <div className="gig-location">{this.state.gig.location}</div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${
                this.state.gig.latLng
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="add-gig-locview"
            >
              <img
                className="add-gig-map"
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${
                  this.state.gig.latLng
                }&zoom=14&size=350x250&markers=color:red%7Clabel:L%7C${
                  this.state.gig.latLng
                }&key=AIzaSyClsojZYYr5d3CQRJpfwDOWozk1bZ3190w`}
                alt="gig-address"
              />
            </a>
            {type === "Artist" && (
              <button onClick={this.handleApply}>Apply</button>
            )}
            {type === "Host" && (
              <button onClick={this.handleApplicant}>See Applicants</button>
            )}
            {this.state.applied === true && (
              <div>You have been applied to this gig</div>
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newGigs: state.newGigs.newGigs
});

export default connect(
  mapStateToProps,
  {}
)(CreatedGig);
