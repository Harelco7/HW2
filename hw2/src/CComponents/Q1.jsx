import React, { Component } from "react";

const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Orange",
  "Pink",
  "Brown",
];
export default class CCButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "",
    };
  }

  Click = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.backgroundColor, padding: "20px" }}
      >
        <div>
          {colors.map((color) => (
            <button
              style={{ margin: 10, background: color }}
              onClick={() => this.Click(color)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
