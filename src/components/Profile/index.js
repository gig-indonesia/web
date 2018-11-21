import React, { Component } from "react";
import "./index.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="artis-name">
          <input type="text" placeholder="Artist Name" />
        </div>

        <div>
          <input type="text" placeholder="Add Photo" />
        </div>

        <div>
          <input type="text" placeholder="Description (min 50 char)" />
        </div>

        <div>
          <input type="text" placeholder="Video" />
        </div>

        <div>
          <input type="submit" placeholder="Submit" />
        </div>
      </div>
    );
  }
}

export default Profile;
