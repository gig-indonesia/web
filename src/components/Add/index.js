import React, { Component } from "react";
import "./index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="gigtitle">
          <input type="text" placeholder="Gig Title" />
        </div>

        <div className="attributes">
          <div className="gig-upload-photo">
            <label htmlFor="imageInput">
              <i className="fas fa-plus" />
            </label>
            <input
              id="imageInput"
              accept="image/*"
              type="file"
              placeholder="Add Photo"
              className="imageInput"
            />
          </div>

          <div>
            <div>
              <input type="text" placeholder="Budget" />
            </div>
            <div>
              <input type="text" placeholder="Date & Time" />
            </div>
          </div>
        </div>
        <div className="description">
          <input type="text" placeholder="Description (mim 50 char) " />
        </div>

        <div className="googlemap">
          <input type="text" placeholder="Google Map" />
        </div>
        <div className="submit">
          <input type="submit" value="Submit" />
        </div>
      </div>
    );
  }
}

export default Add;
