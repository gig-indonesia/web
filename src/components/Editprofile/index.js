import React, { Component } from "react";
import "./index.css";
import axios from "axios";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      about: "",
      name: "",
      contact: "",
      artistType: ""
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
    e.target.disabled = true;
    const data = await new FormData();
    await data.append(
      "user_data",
      JSON.stringify({
        name: this.state.name,
        about: this.state.about,
        contact: this.state.contact,
        artistType: this.state.artistType
      })
    );
    const token = await localStorage.getItem("token");

    await data.append("user_image", this.state.image);

    axios
      .put("https://gig-id.herokuapp.com/artist/updateprofile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
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
          <p>Name</p>
          <input
            className="edit-text-area"
            placeholder="Your Name / Your Group Name"
            type="text"
            name="name"
            onChange={this.handleOnChange}
            value={this.state.name}
          />
          <p>Artist Type</p>
          <div className="artist-type">
            <input
              type="radio"
              name="artistType"
              id="soloType"
              value="solo"
              onClick={this.handleOnChange}
            />
            <label htmlFor="soloType">Solo</label>

            <input
              type="radio"
              name="artistType"
              id="groupType"
              value="group"
              onClick={this.handleOnChange}
            />
            <label htmlFor="groupType">Group</label>
          </div>

          <p>About</p>
          <input
            placeholder="About"
            type="text"
            name="about"
            onChange={this.handleOnChange}
            value={this.state.about}
          />

          <p>Contact</p>
          <input
            className="edit-text-area"
            name="contact"
            placeholder="Phone number"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.contact}
          />

          <button onClick={this.handleSubmit}>submit</button>
        </div>
      </div>
    );
  }
}

export default EditProfile;
