import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import { connect } from "react-redux";
import { fetchDataArtists } from "../../action/newArtistsAction";
import { fetchDataGigs } from "../../action/newGigsAction";
import { searchArtists } from "../../action/searchArtistsAction";
import { searchGigs } from "../../action/searchGigsReducer";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "gigs",
      searchGigsInput: "",
      searchArtistsInput: ""
    };
  }

  handleOnClick = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearchGigs = e => {
    this.props.searchGigs(this.state.searchGigsInput);
  };

  // handleSearchArtists = e => {
  //   this.props.searchArtists(this.state.searchArtistsInput);
  // };

  componentDidMount() {
    // this.props.fetchDataArtists();
    this.props.fetchDataGigs();
  }

  render() {
    return (
      <div className="search-container">
        <h2>Search</h2>
        {/* <div className="search-type-button">
          {this.state.search === "gigs" ? (
            <button
              className="search-clicked-button"
              onClick={this.handleOnClick}
              value="gigs"
              id="search-gigs-button"
            >
              Gigs
            </button>
          ) : (
            <button
              className="search-normal-button"
              onClick={this.handleOnClick}
              value="gigs"
              id="search-gigs-button"
            >
              Gigs
            </button>
          )}

          {this.state.search === "artists" ? (
            <button
              className="search-clicked-button"
              onClick={this.handleOnClick}
              value="artists"
              id="search-artists-button"
            >
              Artists
            </button>
          ) : (
            <button
              className=" search-normal-button"
              onClick={this.handleOnClick}
              value="artists"
              id="search-artists-button"
            >
              Artists
            </button>
          )}
        </div> */}
        <div>
          {/* {this.state.search === "artists" && (
            <React.Fragment>
              <div className="search-artists">
                <input
                  type="text"
                  name="searchArtistsInput"
                  placeholder="search artists"
                  onChange={this.handleOnChange}
                />
                <button onClick={this.handleSearchArtists}>
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="search-gigs-results">
                {this.props.newArtists.map((artist, index) => (
                  <div key={`artist-${index}`}>
                    <ArtistBox newArtists={artist} />
                  </div>
                ))}
              </div>
            </React.Fragment>
          )} */}
          {this.state.search === "gigs" && (
            <React.Fragment>
              <div className="search-gigs">
                <input
                  type="text"
                  name="searchGigsInput"
                  placeholder="search gigs"
                  onChange={this.handleOnChange}
                  value={this.state.searchGigsInput}
                />
                <button onClick={this.handleSearchGigs}>
                  <i className="fas fa-search" />
                </button>
              </div>
              {this.props.newGigs
                .filter(gig =>
                  gig.title
                    .toLowerCase()
                    .includes(this.state.searchGigsInput.toLowerCase())
                )
                .map((gig, index) => (
                  <GigBox key={`gigs-${index}`} newGigs={gig} />
                ))}
            </React.Fragment>
          )}
        </div>
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
  { fetchDataArtists, fetchDataGigs, searchArtists, searchGigs }
)(Search);

// export default Search;
