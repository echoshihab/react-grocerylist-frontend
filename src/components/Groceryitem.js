import React, { Component } from "react";

export class Groceryitem extends Component {
  state = {
    editGroceryItem: false,
    groceryItem: "",
    quantity: ""
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
      editGroceryItem: !this.state.editGroceryItem,
      groceryItem: this.props.grocery.item,
      quantity: this.props.grocery.quantity
    });
  };

  saveGrocery = () => {
    this.props.updateItem(
      this.props.grocery.id,
      this.state.groceryItem,
      this.state.quantity
    );
    this.setState({
      editGroceryItem: !this.state.editGroceryItem
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return !this.state.editGroceryItem ? (
      <div style={this.addStyle()}>
        <span>{this.props.grocery.item}</span>
        <span style={padLeftStyle}>{this.props.grocery.quantity}</span>
        <span style={padLeftStyle}>
          <button
            name="check"
            className="btn btn-success btn-sm"
            onChange={this.props.toggleComplete.bind(
              this,
              this.props.grocery.id
            )}
          >
            Check
          </button>

          <button
            type="button"
            className="btn btn-danger btn-sm"
            onDoubleClick={this.props.deleteItem.bind(
              this,
              this.props.grocery.id
            )}
          >
            Delete
          </button>

          <button
            id="edit"
            type="button"
            className="btn btn-dark btn-sm"
            onClick={this.editGrocery}
          >
            Edit
          </button>
        </span>
      </div>
    ) : (
      <div style={this.addStyle()}>
        <input
          type="text"
          name="groceryItem"
          defaultValue={this.props.grocery.item}
          onChange={this.onChange}
        />

        <input
          type="text"
          name="quantity"
          defaultValue={this.props.grocery.quantity}
          onChange={this.onChange}
        />
        <span style={padLeftStyle}>
          <button
            name="check"
            className="btn btn-light btn-sm"
            onChange={this.props.toggleComplete.bind(
              this,
              this.props.grocery.id
            )}
          >
            Uncheck
          </button>

          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={this.props.deleteItem.bind(this, this.props.grocery.id)}
          >
            Delete
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={this.saveGrocery}
          >
            Save
          </button>
        </span>
      </div>
    );
  }
}

const padLeftStyle = {
  paddingLeft: "10px"
};

export default Groceryitem;
