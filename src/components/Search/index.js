import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import ArtistBox from "../SmallComponents/ArtistBox";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "gigs"
    };
  }

  handleOnClick = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <div className="search-container">
        <h2>Search</h2>
        <div className="search-type-button">
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
        </div>
        <div>
          {this.state.search === "artists" && (
            <React.Fragment>
              <div className="search-artists">
                <input
                  type="text"
                  name="search-artists-input"
                  placeholder="search artists"
                />
                <button>
                  <i className="fas fa-search" />
                </button>
              </div>
              <ArtistBox />
            </React.Fragment>
          )}
          {this.state.search === "gigs" && (
            <React.Fragment>
              <div className="search-gigs">
                <input
                  type="text"
                  name="search-gigs-input"
                  placeholder="search gigs"
                />
                <button>
                  <i className="fas fa-search" />
                </button>
              </div>
              <GigBox />
            </React.Fragment>
          )}
        </div>
        {/* <GigBox /> 
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox /> */}
      </div>
    );
  }
}

export default Search;
