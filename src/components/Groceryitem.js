import React, { Component } from "react";
import PropTypes from "prop-types";

export class Groceryitem extends Component {
  addStyle = () => {
    return {
      border: "solid 1px",
      padding: "10px",
      textDecoration: this.props.grocery.completed ? "line-through" : "none"
    };
  };
  render() {
    return (
      <div style={this.addStyle()}>
        <p>
          {this.props.grocery.item}
          <span style={qtStyle}>{this.props.grocery.quantity}</span>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(
              this,
              this.props.grocery.id
            )}
          />

          <button
            style={deleteStyle}
            onClick={this.props.deleteItem.bind(this, this.props.grocery.id)}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

//prop-types
Groceryitem.propTypes = {
  grocery: PropTypes.object.isRequired
};

const deleteStyle = {
  background: "red",
  color: "white",
  padding: "2px 4px"
};

const qtStyle = {
  color: "black",
  padding: "2px 10px",
  borderStyle: "solid"
};
export default Groceryitem;
