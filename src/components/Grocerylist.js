import React, { Component } from "react";
import { connect } from "react-redux";
import Groceryitem from "./Groceryitem";
import {
  getList,
  deleteItem,
  updateItem,
  toggleComplete
} from "../actions/grocery";

class Grocerylist extends Component {
  componentDidMount() {
    this.props.getList();
  }
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

const mapStateToProps = state => ({
  grocerylist: state.grocery.grocerylist
});

export default connect(
  mapStateToProps,
  { getList, deleteItem, updateItem, toggleComplete }
)(Grocerylist);
