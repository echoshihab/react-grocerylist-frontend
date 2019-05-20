import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/auth";
import { createMessage } from "../actions/messages";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({
        passwordsNotMatch: "Passwords do not match!"
      });
    } else {
      const newUser = {
        username,
        password,
        email
      };
      this.props.register(newUser);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/grocery-list" />;
    }

    const { username, email, password, password2 } = this.state;
    return (
      <div className="container py-5">
        <div className="col-md-6 mx-auto">
          <h2 className="text-center mb-0">Sign up!</h2>

          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="username"
                onChange={this.onChange}
                className="form-control"
                value={username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Email: </label>
              <input
                type="email"
                name="email"
                onChange={this.onChange}
                className="form-control"
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                onChange={this.onChange}
                className="form-control"
                value={password}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Verify Password: </label>
              <input
                type="password"
                name="password2"
                onChange={this.onChange}
                className="form-control"
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary form-control">
                Sign Up
              </button>
            </div>
            <p>
              Already have an accoun? <Link to="/">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { register, createMessage }
)(Register);
