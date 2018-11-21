import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import ArtistBox from "../SmallComponents/ArtistBox";
import Slider from "react-slick";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArtists: [],
      newGigs: []
    };
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
        <h2>New Artists</h2>
        <div className="home-new-artists">
          <div>
            <Slider {...settings}>
              <div>
                <ArtistBox />
              </div>
              <div>
                <ArtistBox />
              </div>
              <div>
                <ArtistBox />
              </div>
              <div>
                <ArtistBox />
              </div>
              <div>
                <ArtistBox />
              </div>
              <div>
                <ArtistBox />
              </div>
              <div>
                <ArtistBox />
              </div>
              <div>
                <ArtistBox />
              </div>
              <div>
                <ArtistBox />
              </div>
              <div>
                <a href="/search/artists">
                  <div className="home-see-more">See More Artists</div>
                </a>
              </div>
            </Slider>
          </div>
        </div>

        <h2>New Gigs</h2>
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

export default Home;
