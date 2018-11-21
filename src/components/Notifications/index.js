import React, { Component } from "react";
import NotifBox from "../SmallComponents/NotifBox";
import "./index.css";

class Notification extends Component {
  render() {
    return (
      <div className="container-notif">
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
        <NotifBox />
      </div>
    );
  }
}

export default Notification;
