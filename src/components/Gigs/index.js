import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import axios from "axios";
import { connect } from "react-redux";

class Gigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGigs: ""
    };
  }

  cancelGig = (e, id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure want to cancel this gig?")) {
      axios
        .delete(`https://gig-id.herokuapp.com/gigs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => this.getItem())
        .catch(err => console.log(err));
    }
  };

  getItem = () => {
    const type = localStorage.getItem("type");
    const endpoint = type === "Artist" ? "artist/applied" : "host/gigcreated";
    const token = localStorage.getItem("token");
    if (this.props.isAuth === false) {
      this.props.history.push("/login");
    } else {
      axios
        .get(`https://gig-id.herokuapp.com/${endpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res);
          this.setState({ userGigs: res.data.Gigs });
        })
        .catch(err => console.log(err));
    }
  };

  componentDidMount() {
    this.getItem();
  }

  render() {
    const type = localStorage.getItem("type");
    return (
      <div className="gigs-container">
        <h2>Your Gigs</h2>

        {this.state.userGigs !== "" ? (
          this.state.userGigs.length === 0 ? (
            <div>You have no any gig</div>
          ) : null
        ) : null}

        {this.state.userGigs !== ""
          ? this.state.userGigs.length > 0
            ? this.state.userGigs.map((gig, index) => (
                <div className="gig-relative">
                  {type === "Host" && (
                    <div className="cancel-gig">
                      <button onClick={e => this.cancelGig(e, gig.id)}>
                        Cancel Gig
                      </button>
                    </div>
                  )}
                  <GigBox key={`gigs-${index}`} newGigs={gig} />
                </div>
              ))
            : null
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth.isAuth
});

// export default connect(
//   mapStateToProps,
//   { fetchDataArtists, fetchDataGigs }
// )(Gigs);

export default connect(
  mapStateToProps,
  {}
)(Gigs);
