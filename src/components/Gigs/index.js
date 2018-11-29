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

  componentDidMount() {
    const type = localStorage.getItem("type");
    const endpoint = type === "Artist" ? "artist/applied" : "host/gigcreated";
    const token = localStorage.getItem("token");
    if (this.props.isAuth === false) {
      this.props.history.push("/login");
    } else {
      axios
        .get(`http://localhost:5000/${endpoint}`, {
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
  }

  render() {
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
                <GigBox key={`gigs-${index}`} newGigs={gig} />
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
