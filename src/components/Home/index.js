import React, { Component } from "react";
import "./index.css";
import GigBox from "../SmallComponents/GigBox";
import ArtistBox from "../SmallComponents/ArtistBox";
import Slider from "react-slick";
import { connect } from "react-redux";
import { fetchDataArtists } from "../../action/newArtistsAction";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGigs: [
        {
          title: "Gig at McDonald",
          location: "Jl. Kemang Utara",
          budget: 1000000,
          id: 201
        },
        {
          title: "Gig at KFC",
          location: "Jl. Mampang",
          budget: 2000000,
          id: 202
        },
        {
          title: "Gig at Liberica",
          location: "Jl. Kemang Tenggara",
          budget: 1500000,
          id: 203
        },
        {
          title: "Gig at WIMO",
          location: "Jl. Kemang Raya",
          budget: 1000000,
          id: 204
        },
        {
          title: "Gig at Lotte",
          location: "Jl. Minum Minum",
          budget: 1520000,
          id: 205
        },
        {
          title: "Gig at Cafe",
          location: "Jl. Kemang Utara Timur",
          budget: 3000200,
          id: 206
        },
        {
          title: "Gig at MCD",
          location: "Jl. Kemang Bangka",
          budget: 1000000,
          id: 207
        },
        {
          title: "Gig at Bubur Ayam Jago Bangkok Kena Penyakit Tetelo",
          location: "Jl. Kemang Timor Leste",
          budget: 5230000,
          id: 208
        },
        {
          title: "Gig at Hotel Amaris",
          location:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          budget: 10500000,
          id: 209
        },
        {
          title: "Gig at Monas",
          location: "Jl. Mampang Utara",
          budget: 1350000,
          id: 210
        },
        {
          title: "Gig at Rumah",
          location: "Jl. Utara",
          budget: 10460000,
          id: 211
        }
      ]
    };
  }

  componentDidMount() {
    this.props.fetchDataArtists();
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
        {this.state.newGigs.map((gig, index) => (
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
  newArtists: state.newArtists.newArtists
});

export default connect(
  mapStateToProps,
  { fetchDataArtists }
)(Home);
