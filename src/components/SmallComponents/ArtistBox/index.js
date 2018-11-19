import React, { Component } from "react";
import "./index.css";
class GigBox extends Component {
  render() {
    return (
      <div className="gig-container">
        <div>Foto</div>
        <div>
          <h3>Gig at Kemang</h3>
          <p>
            Jalan Kemang I, Mampang Prapatan, RT.12/RW.1, Bangka, Jakarta
            Selatan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
          </p>
          <div>
            <div>uang</div>
            <div>Rp.1.000.000</div>
          </div>
        </div>
      </div>
    );
  }
}

export default GigBox;
