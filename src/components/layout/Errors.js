import React, { Component } from "react";
import { connect } from "react-redux";
import messages from "../../reducers/messages";

export class Errors extends Component {
  state = {
    errorMessages: []
  };

  componentDidUpdate(prevProps) {
    const errors = [];
    const { error, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) errors.push(error.msg.name);
      if (error.msg.email) errors.push(error.msg.email);
      if (error.msg.message) errors.push(error.msg.message);
      if (error.msg.non_field_errors) errors.push(error.msg.non_field_errors);
      if (error.msg.username) errors.push(error.msg.username);
      this.setState({ errorMessages: errors });
    }
  }

  render() {
    return this.state.errorMessages.map(errorMessage => (
      <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    ));
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(Errors);
