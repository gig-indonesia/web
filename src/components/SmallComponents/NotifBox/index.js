import React, { Component } from "react";
import "./index.css";

class Notification extends Component {
  render() {
    return (
      <div className="notif-container">
        <div>
          <p className="date">19 oct 2018, 7:19pm</p>
          <hr />
          <p className="mention">Pass band has been applied to your GIG</p>
        </div>
      </div>
    );
  }
}

export default Notification;
