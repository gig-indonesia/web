import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import ArtistBox from "../SmallComponents/ArtistBox";
import Slider from "react-slick";
import { connect } from "react-redux";
import { fetchDataArtists } from "../../action/newArtistsAction";
import { fetchDataGigs } from "../../action/newGigsAction";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchDataArtists();
    this.props.fetchDataGigs();
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 1,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div className="home-container">
        <div className="home-artists-top">
          <h2>New Artists</h2>
          <div>
            <Link to="/search/artists">See More</Link>
          </div>
        </div>

        <div className="home-new-artists">
          <div>
            <Slider {...settings}>
              {this.props.newArtists.map((artist, index) => (
                <div key={`artist-${index}`}>
                  <ArtistBox newArtists={artist} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <h2>New Gigs</h2>
        {this.props.newGigs.map((gig, index) => (
          <GigBox key={`gigs-${index}`} newGigs={gig} />
        ))}
        <div className="home-gigs-see-more">
          <button>
            See More Gigs <i className="fas fa-arrow-right" />
          </button>
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
  { fetchDataArtists, fetchDataGigs }
)(Home);
