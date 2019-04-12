import React, { Component } from "react";
import Groceryitem from "./Groceryitem";
import PropTypes from "prop-types";

class Grocerylist extends Component {
  render() {
    return this.props.grocerylist.map(grocery => (
      <Groceryitem
        grocery={grocery}
        toggleComplete={this.props.toggleComplete}
        deleteItem={this.props.deleteItem}
        updateItem={this.props.updateItem}
        key={grocery.id}
      />
    ));
  }
}

//prop-types
Grocerylist.propTypes = {
  grocerylist: PropTypes.array.isRequired
};

export default Grocerylist;
