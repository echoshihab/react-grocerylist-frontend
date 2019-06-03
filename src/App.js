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
import { loadUser } from "./actions/auth";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
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
