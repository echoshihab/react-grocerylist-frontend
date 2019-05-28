import { combineReducers } from "redux";
import grocery from "./grocery";
import messages from "./messages";
import errors from "./errors";
import auth from "./auth";

export default combineReducers({
  grocery,
  errors,
  messages,
  auth
});
