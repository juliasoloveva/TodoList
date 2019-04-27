import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItems extends Component {
  static PropTypes = {
    items: PropTypes.array
  };

  renderItem = item => {
    return <li key={item.key}>{item.text}</li>;
  };
  render() {
    const listItems = this.props.items.map(this.renderItem);
    return <ul>{listItems}</ul>;
  }
}

export default TodoItems;
