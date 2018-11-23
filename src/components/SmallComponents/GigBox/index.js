import React, { Component } from "react";
import "./index.css";
import img from "../../../asset/rest.jpg";

class GigBox extends Component {
  render() {
    return (
      <div className="gig-container">
        <div className="gig-photo">
          <img src={img} alt="rest" />
        </div>
        <div>
          <h3>Gig at Kemang</h3>
          <p>
            Jalan Kemang I, Mampang Prapatan, RT.12/RW.1, Bangka, Jakarta
            Selatan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
          </p>
          <div className="gig-price">
            <span className="price-logo">
              <i className="fas fa-money-bill" />
            </span>
            <div>Rp.1.000.000</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GigBox;
