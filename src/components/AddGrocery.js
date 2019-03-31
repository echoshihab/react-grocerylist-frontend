import React, { Component } from "react";

export class AddGrocery extends Component {
  state = {
    groceryItem: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addGrocery(this.state.groceryItem);
    this.setState({ groceryItem: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="groceryItem"
          placeholder="add grocery item"
          style={{ flex: "10" }}
          value={this.state.groceryItem}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" style={{ flex: "1" }} />
      </form>
    );
  }
}

export default AddGrocery;
