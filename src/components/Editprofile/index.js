import React, { Component } from "react";
import "./index.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      about: "",
      skills: "",
      contact: "",
      email: ""
    };
  }
  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleOnChange = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    const data = await new FormData();
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
          <label htmlFor="edit-image-photo">
            {!this.state.image && (
              <div>
                <i className="fas fa-plus" />
                <p>Add Photo</p>
              </div>
            )}
          </label>
        </div>

        <input
          id="edit-image-photo"
          accept="image/*"
          type="file"
          placeholder="Add photo"
          className="add-gig-image"
          onChange={this.handleImageChange}
          name="image"
        />

        <div className="edit-about">
          <p>About</p>
          <input
            placeholder="About"
            type="text"
            name="about"
            onChange={this.handleOnChange}
            value={this.state.about}
          />

          <p>Skills</p>
          <input
            className="edit-text-area"
            placeholder="Skills"
            type="text"
            name="skills"
            onChange={this.handleOnChange}
            value={this.state.skills}
          />

          <p>contact</p>
          <input
            className="edit-text-area"
            name="Phone"
            placeholder="Phone number"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.contact}
          />

          <button type="submit" value="Submit" onClick={this.handleSubmit}>
            submit
          </button>
        </div>
      </div>
    );
  }
}

export default EditProfile;
