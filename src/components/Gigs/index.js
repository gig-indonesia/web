import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import { connect } from "react-redux";
import { fetchDataArtists } from "../../action/newArtistsAction";
import { fetchDataGigs } from "../../action/newGigsAction";

class Gigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArtists: [],
      newGigs: []
    };
  }

  componentDidMount() {
    this.props.fetchDataArtists();
    this.props.fetchDataGigs();
  }

  render() {
    return (
      <div className="gigs-container">
        <h2>Your Gigs</h2>
        {this.props.newGigs.map((gig, index) => (
          <GigBox key={`gigs-${index}`} newGigs={gig} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newArtists: state.newArtists.newArtists,
  newGigs: state.newGigs.newGigs
});

export default connect(
  mapStateToProps,
  { fetchDataArtists, fetchDataGigs }
)(Gigs);

// export default Gigs;
