import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorCity.css";
import Navbar from "./Navbar";

class ColorCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      formate: "hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormate = this.changeFormate.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormate(val) {
    this.setState({ formate: val });
  }

  render() {
    const { colors, cityName, emoji } = this.props.city;
    const { level, formate } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[formate]} name={color.name} key={color.id} />
    ));

    return (
      <div className="City">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormate}
        />
        <div className="City-colors">{colorBoxes}</div>
        <footer className="city-footer">
          {cityName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default ColorCity;
