import React, { Component } from "react";
import "./index.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "", latLng: "" };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latLng: `${latLng.lat}, ${latLng.lng}`
        });
        console.log("Success", latLng.lat);
      })
      .catch(error => console.error("Error", error));
  };
  render() {
    const gigDate = new Date();
    gigDate.setDate(gigDate.getDate());
    const date = gigDate.toISOString().substr(0, 10);

    const gigHour = new Date();
    gigHour.setHours(gigHour.getHours() + 7);
    const hour = gigHour.toISOString().substr(11, 8);

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
              <input type="date" placeholder="Date" defaultValue={date} />
            </div>
            <div>
              <input type="time" placeholder="Time" defaultValue={hour} />
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
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
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
          <input type="submit" value="Submit" />
        </div>
      </div>
    );
  }
}

export default Add;
