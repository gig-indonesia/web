import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to={`/notifications/${this.props.notifications}`}>
        <div className="notif-container">
          <div>
            <p className="date">{this.props.date}</p>
            <hr />
            <p className="mention">{this.props.notif}</p>
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = store => {
  return {
    notifications: store.newNotifications.newNotifications
  };
};

export default connect(mapStateToProps)(Notification);
