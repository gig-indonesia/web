import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import axios from "axios";
// import { connect } from "react-redux";
// import { fetchDataArtists } from "../../action/newArtistsAction";
// import { fetchDataGigs } from "../../action/newGigsAction";

class Gigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGigs: ""
    };
  }

  async componentDidMount() {
    await axios
      .get("https://gig-id.herokuapp.com/host/1")
      .then(res => {
        console.log(res);
        this.setState({ userGigs: res.data.Gigs });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="gigs-container">
        <h2>Your Gigs</h2>
        {this.state.userGigs !== "" &&
          this.state.userGigs.map((gig, index) => (
            <GigBox key={`gigs-${index}`} newGigs={gig} />
          ))}
        {/* {this.state.userGigs.map((gig, index) => (
          <GigBox key={`gigs-${index}`} newGigs={gig} />
        ))} */}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   newArtists: state.newArtists.newArtists,
//   newGigs: state.newGigs.newGigs
// });

// export default connect(
//   mapStateToProps,
//   { fetchDataArtists, fetchDataGigs }
// )(Gigs);

export default Gigs;
