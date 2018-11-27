import React, { Component } from "react";
import Rest from "../../asset/rest.jpg";
import "./index.css";
class CreatedGig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isArtist: true,
      latLng: "-6.2568167,106.94881620000001",
      gigId: 1
    };
  }

  render() {
    return (
      <div className="single-gig-container">
        <div className="gig-image">
          <img src={Rest} alt="gig-images" />

          <div className="gig-info">
            <h1>Gig at Kemang Gig at Kemang Gig at Kemang</h1>
            <div className="gig-budget">Rp. 1.000.000</div>
            <time dateTime="2018-02-14 20:00">2018-02-14 20:00</time>
          </div>
        </div>
        <h4>Description</h4>
        <div className="gig-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <h4>Location</h4>
        <div className="gig-location">
          WIMO Building 3rd fl, No., Jl. Kemang I No.7, RT.12/RW.1, Bangka,
          Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
          12730
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${
            this.state.latLng
          }`}
          target="_blank"
          rel="noopener noreferrer"
          className="add-gig-locview"
        >
          <img
            className="add-gig-map"
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${
              this.state.latLng
            }&zoom=14&size=350x250&markers=color:red%7Clabel:L%7C${
              this.state.latLng
            }&key=AIzaSyClsojZYYr5d3CQRJpfwDOWozk1bZ3190w`}
            alt="gig-address"
          />
        </a>
        {this.state.isArtist && <button>Apply</button>}
      </div>
    );
  }
}

export default CreatedGig;
