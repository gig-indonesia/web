import React, { Component } from "react";
import "./index.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="add-container">
        <h2>Add New Gig</h2>
        <div className="add-gig-title">
          <input type="text" placeholder="Gig title" />
        </div>

        <div className="add-gig-attributes">
          <div className="add-gig-photo">
            <label htmlFor="add-gig-image" className="add-photo-icon">
              <i className="fas fa-plus" />
              <p>Add Photo</p>
            </label>
          </div>

          <input
            id="add-gig-image"
            accept="image/*"
            type="file"
            placeholder="Add photo"
            className="add-gig-image"
          />

          <div className="add-right-input">
            <div>
              <input type="text" placeholder="Budget" />
            </div>
            <div>
              <input type="date" placeholder="Time" />
            </div>
          </div>
        </div>
        <textarea
          className="add-gig-description"
          maxLength="255"
          minLength="30"
          placeholder="Description (30 - 255 characters)"
        />

        <div className="add-gig-location">
          <input type="text" placeholder="Location" />
        </div>
        <div className="add-gig-submit">
          <input type="submit" value="Submit" />
        </div>
      </div>
    );
  }
}

export default Add;
