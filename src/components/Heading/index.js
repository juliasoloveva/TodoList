import React, { Component } from "react";

import "./Heading.scss";
import propTypes from "prop-types";
class Heading extends Component {
  static propTypes = {
    text: propTypes.string
  };
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

export default Heading;
