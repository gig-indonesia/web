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
          <div>
            <input type="text" placeholder="Add Photo" />
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

        <input type="text" placeholder="Description (mim 50 char) " />
        <input type="text" placeholder="Google Map" />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Add;
