import axios from "axios";
import { returnErrors } from "./messages";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from "./types";

//Login User
export const login = (username, password) => dispatch => {
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ username, password }); //same as username: username etc..

  axios
    .post("http://localhost:8000/api/accounts/login/", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//Register User

export const register = ({ username, password, email }) => dispatch => {
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //Request body
  const body = JSON.stringify({ username, password, email }); //same as username:username etc..

  axios
    .post("http://localhost:8000/api/accounts/register/", body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//logout user
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

//SETUP CONFIG WITH TOKEN - HELPER FUNCTION
export const tokenConfig = getState => {
  //get access koken from state
  const access = getState().auth.access;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (access) {
    config.headers["Authorization"] = access;
  }
  return config;
};
