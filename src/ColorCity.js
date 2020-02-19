import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorCity.css";

class ColorCity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const colorBoxes = this.props.city.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));
    console.log(colorBoxes);

    return (
      <div className="City">
        {/*Navbar */}
        <div className="City-colors">{colorBoxes}</div>
        {/*footer */}
      </div>
    );
  }
}

export default ColorCity;
