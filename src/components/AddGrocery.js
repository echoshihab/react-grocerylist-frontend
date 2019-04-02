import React, { Component } from "react";

export class AddGrocery extends Component {
  state = {
    groceryItem: "",
    quantity: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addGrocery(this.state.groceryItem, this.state.quantity);
    this.setState({ groceryItem: "", quantity: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="groceryItem"
          placeholder="add grocery item"
          style={{ flex: "5" }}
          value={this.state.groceryItem}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="quantity"
          placeholder="add quantity"
          style={{ flex: "5" }}
          value={this.state.quantity}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" style={{ flex: "1" }} />
      </form>
    );
  }
}

export default AddGrocery;
