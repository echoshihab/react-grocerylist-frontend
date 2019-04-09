import React, { Component } from "react";
import PropTypes from "prop-types";

export class Groceryitem extends Component {
  state = {
    editGroceryItem: false
  };
  addStyle = () => {
    return {
      border: "solid 1px",
      padding: "10px",
      textDecoration: this.props.grocery.completed ? "line-through" : "none"
    };
  };

  editGrocery = () => {
    this.setState({
      editGroceryItem: !this.state.editGroceryItem
    });
  };

  render() {
    return !this.state.editGroceryItem ? (
      <div style={this.addStyle()}>
        <span style={qtStyle}>{this.props.grocery.item}</span>
        <span style={qtStyle}>{this.props.grocery.quantity}</span>

        <input
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, this.props.grocery.id)}
        />

        <button
          style={deleteStyle}
          onDoubleClick={this.props.deleteItem.bind(
            this,
            this.props.grocery.id
          )}
        >
          Delete
        </button>

        <button style={editStyle} onClick={this.editGrocery}>
          Edit
        </button>
      </div>
    ) : (
      <div style={this.addStyle()}>
        <input
          type="text"
          defaultValue={this.props.grocery.item}
          style={qtStyle}
        />

        <input
          type="text"
          defaultValue={this.props.grocery.quantity}
          style={qtStyle}
        />

        <input
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, this.props.grocery.id)}
        />

        <button
          style={deleteStyle}
          onClick={this.props.deleteItem.bind(this, this.props.grocery.id)}
        >
          Delete
        </button>

        <button style={saveStyle} onClick={this.editGrocery}>
          Save
        </button>
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

const editStyle = {
  background: "blue",
  color: "white",
  padding: "2px 4px"
};

const saveStyle = {
  background: "green",
  color: "white",
  padding: "2px 4px"
};

const qtStyle = {
  color: "black",
  padding: "2px 10px",
  borderStyle: "solid"
};

export default Groceryitem;
