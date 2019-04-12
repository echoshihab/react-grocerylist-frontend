import React, { Component } from "react";
import "./App.css";
import Grocerylist from "./components/Grocerylist";
import Title from "./components/Title";
import AddGrocery from "./components/AddGrocery";
import axios from "axios";

class App extends Component {
  state = {
    grocerylist: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/")
      .then(res => this.setState({ grocerylist: res.data }));
  }

  toggleComplete = id => {
    this.setState({
      grocerylist: this.state.grocerylist.filter(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  };

  deleteItem = id => {
    axios.delete(`http://localhost:8000/api/${id}`).then(res =>
      this.setState({
        grocerylist: [...this.state.grocerylist.filter(item => item.id !== id)]
      })
    );
  };

  addGrocery = (groceryItem, quantity) => {
    axios
      .post("http://localhost:8000/api/", {
        item: groceryItem,
        quantity: quantity,
        completed: false
      })
      .then(res =>
        this.setState({ grocerylist: [...this.state.grocerylist, res.data] })
      );
  };

  updateItem = (id, item, quantity) => {
    axios
      .put(`http://localhost:8000/api/${id}/`, {
        item,
        quantity
      })
      .then(res => {
        let copyList = [...this.state.grocerylist];
        let itemIndex = copyList.findIndex(item => item.id === id);
        copyList[itemIndex] = res.data;
        this.setState({
          grocerylist: copyList
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <AddGrocery addGrocery={this.addGrocery} />
        <Grocerylist
          grocerylist={this.state.grocerylist}
          toggleComplete={this.toggleComplete}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        />
      </div>
    );
  }
}

export default App;
