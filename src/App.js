import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./User/Login";
import Register from "./User/Register";
import GroceryApp from "./components/GroceryApp";
import Mainbar from "./components/layout/Mainbar";
import UserRoute from "./User/UserRoute";
import store from "./store";
import "./App.css";

//import axios from "axios";

class App extends Component {
  /*
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
*/
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Mainbar />
            <div className="container">
              <Switch>
                <UserRoute exact path="/" component={GroceryApp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
