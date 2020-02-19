import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorCity.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./SliderTheme.css";

class ColorCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.city;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));

    return (
      <div className="City">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/*Navbar */}
        <div className="City-colors">{colorBoxes}</div>
        {/*footer */}
      </div>
    );
  }
}

export default ColorCity;
