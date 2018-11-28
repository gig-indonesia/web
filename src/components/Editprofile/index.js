import React, { Component } from "react";
import "./index.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  render() {
    return (
      <div className="container-edit-profile">
        <div
          className="edit-prof-photo"
          style={{
            backgroundImage: `url(${
              this.state.image ? URL.createObjectURL(this.state.image) : ""
            })`
          }}
        >
          <label htmFor="edit-image-photo">
            {!this.state.image && (
              <div>
                <i className="fas fa-plus" />
                <p>Add Photo</p>
              </div>
            )}
          </label>
        </div>

        <input
          id="add-gig-image"
          accept="image/*"
          type="file"
          placeholder="Add photo"
          className="add-gig-image"
          onChange={this.handleImageChange}
          name="image"
        />

        <div className="edit-about">
          <p>About</p>
          <input />

          <p>skills</p>
          <input className="edit-text-area" />

          <p>contact</p>
          <input
            className="edit-text-area"
            name="Phone"
            placeholder="Phone number"
          />
          <input
            className="edit-text-area"
            name="email"
            placeholder="email or username"
          />
        </div>
      </div>
    );
  }
}

export default EditProfile;
