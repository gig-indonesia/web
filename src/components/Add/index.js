import React, { Component } from "react";
import "./index.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import axios from "axios";
import { connect } from "react-redux";

const gigDate = new Date();
gigDate.setDate(gigDate.getDate());
const date = gigDate.toISOString().substr(0, 10);

const gigHour = new Date();
gigHour.setHours(gigHour.getHours() + 7);
const hour = gigHour.toISOString().substr(11, 8);

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      budget: "",
      date: date,
      time: hour,
      description: "",
      location: "",
      latLng: "",
      image: null
    };
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleLocation = location => {
    this.setState({ location });
  };

  handleSelect = location => {
    geocodeByAddress(location)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latLng: `${latLng.lat}, ${latLng.lng}`
        });
        console.log("Success", latLng.lat);
      })
      .catch(error => console.error("Error", error));
  };

  handleSubmit = async e => {
    const data = await new FormData();

    await data.append(
      "user_data",
      JSON.stringify({
        title: this.state.title,
        budget: this.state.budget,
        date: this.state.date,
        time: this.state.time,
        description: this.state.description,
        location: this.state.location,
        latLng: this.state.latLng
      })
    );
    const token = await localStorage.getItem("token");
    await data.append("user_image", this.state.image);
    axios
      .post("http://localhost:5000/gigs", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res);
        this.props.history.push("/gigs");
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    if (this.props.isAuth === false) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="add-container">
        <h2>Add New Gig</h2>
        <div className="add-gig-title">
          <input
            type="text"
            placeholder="Gig title"
            name="title"
            onChange={this.handleOnChange}
            value={this.state.title}
          />
        </div>

        <div className="add-gig-attributes">
          <div
            className="add-gig-photo"
            style={{
              backgroundImage: `url(${
                this.state.image ? URL.createObjectURL(this.state.image) : ""
              })`
            }}
          >
            <label htmlFor="add-gig-image" className="add-photo-icon">
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

          <div className="add-right-input">
            <div>
              <input
                type="text"
                placeholder="Budget"
                name="budget"
                onChange={this.handleOnChange}
                value={this.state.budget}
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Date"
                name="date"
                onChange={this.handleOnChange}
                value={this.state.date}
              />
            </div>
            <div>
              <input
                type="time"
                placeholder="Time"
                name="time"
                onChange={this.handleOnChange}
                value={this.state.time}
              />
            </div>
          </div>
        </div>
        <textarea
          className="add-gig-description"
          maxLength="255"
          minLength="30"
          placeholder="Description (30 - 255 characters)"
          name="description"
          onChange={this.handleOnChange}
          value={this.state.description}
        />

        <div className="add-gig-location">
          <PlacesAutocomplete
            value={this.state.location}
            onChange={this.handleLocation}
            onSelect={this.handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input"
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <div>
          {this.state.latLng !== "" && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${
                this.state.latLng
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="add-gig-locview"
            >
              <img
                className="add-gig-map"
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${
                  this.state.latLng
                }&zoom=14&size=350x250&markers=color:red%7Clabel:L%7C${
                  this.state.latLng
                }&key=AIzaSyClsojZYYr5d3CQRJpfwDOWozk1bZ3190w`}
                alt="gig-address"
              />
            </a>
          )}
        </div>
        <div className="add-gig-submit">
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
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
)(Add);
