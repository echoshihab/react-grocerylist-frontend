import axios from "axios";
import { returnErrors } from "./messages";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  RENEW_SUCCESS
} from "./types";

// submit refresh tokena to get new access token
export const renewAccess = () => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const refresh = getState().auth.refresh;
  axios
    .post("http://localhost:8000/api/token/refresh/", { refresh }, config)
    .then(res => {
      console.log(res);
      dispatch({
        type: RENEW_SUCCESS,
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

//check timeout for access token and dispatching renewal of access token
export const checkAccessTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(renewAccess());
      console.log("dispatching renew access");
    }, expirationTime * 1000);
  };
};

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
      dispatch(checkAccessTimeout(280));
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
  //get access token from state
  const access = getState().auth.access;
  //const refresh = getState().auth.refresh;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (access) {
    config.headers["Authorization"] = `Bearer ${access}`;
  }
  return config;
};
