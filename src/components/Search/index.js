import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "artists"
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
        <Link to="/search/artists">
          <button
            className="clicked-button"
            onClick={this.handleOnClick}
            value="artists"
          >
            Artists
          </button>
        </Link>
        <Link to="/search/gigs">
          <button
            className="normal-button"
            onClick={this.handleOnClick}
            value="gigs"
          >
            Gigs
          </button>
        </Link>
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
        <GigBox />
      </div>
    );
  }
}

export default Search;
