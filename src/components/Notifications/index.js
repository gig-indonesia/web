import React, { Component } from "react";
import NotifBox from "../SmallComponents/NotifBox";
import "./index.css";
import axios from "axios";
import { connect } from "react-redux";

class Notification extends Component {
  async componentDidMount() {
    if (this.props.isAuth === false) {
      this.props.history.push("/login");
    } else {
      await axios
        .get("http://localhost:5000/host/1")
        .then(res => {
          console.log(res);
          this.setState({ userGigs: res.data.Gigs });
        })
        .catch(err => console.log(err));
    }
  }

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

const mapStateToProps = state => ({
  isAuth: state.isAuth.isAuth
});

export default connect(
  mapStateToProps,
  {}
)(Notification);
