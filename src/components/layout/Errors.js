import React, { Component } from "react";
import { connect } from "react-redux";
import messages from "../../reducers/messages";

export class Errors extends Component {
  state = {
    errorMessages: [],
    messages: [],
    msgFlag: false
  };

  componentDidUpdate(prevProps) {
    const errors = [];
    const messages = [];
    const { error, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) errors.push(error.msg.name);
      if (error.msg.email) errors.push(error.msg.email);
      if (error.msg.message) errors.push(error.msg.message);
      if (error.msg.non_field_errors) errors.push(error.msg.non_field_errors);
      if (error.msg.username) errors.push(error.msg.username);
      this.setState({ errorMessages: errors, msgFlag: false });
      setTimeout(() => {
        this.setState({ errorMessages: [] });
      }, 5 * 1000);
    }
    if (message !== prevProps.message) {
      if (message.addItem) messages.push("Item Added");
      if (message.deleteItem) messages.push("Item Deleted");
      if (message.updateItem) messages.push("Item Updated");
      this.setState({ errorMessages: messages, msgFlag: true });
      setTimeout(() => {
        this.setState({ errorMessages: [] });
      }, 5 * 1000);
    }
  }

  render() {
    return this.state.errorMessages.map(errorMessage => (
      <div
        className={
          this.state.msgFlag ? "alert alert-success" : "alert alert-danger"
        }
        role="alert"
      >
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
