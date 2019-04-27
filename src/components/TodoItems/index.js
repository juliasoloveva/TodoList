import React, { Component } from "react";
import propTypes from "prop-types";

class TodoItems extends Component {
  static propTypes = {
    items: propTypes.array,
    removeItem: propTypes.func
  };

  renderItem = item => {
    return (
      <li key={item.key} onClick={() => this.props.removeItem(item.key)}>
        {item.text}
      </li>
    );
  };
  render() {
    const listItems = this.props.items.map(this.renderItem);
    return <ul>{listItems}</ul>;
  }
}

export default TodoItems;
