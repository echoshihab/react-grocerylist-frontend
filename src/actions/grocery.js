import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {
  GET_LIST,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  TOGGLE_ITEM
} from "./types";

//GET LIST
export const getList = () => (dispatch, getState) => {
  axios
    .get("http://localhost:8000/api/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LIST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`http://localhost:8000/api/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteItem: "Item Deleted" }));
      dispatch({
        type: DELETE_ITEM,
        payload: id
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateItem = (id, item, quantity) => (dispatch, getState) => {
  axios
    .put(
      `http://localhost:8000/api/${id}/`,
      {
        item,
        quantity
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch(createMessage({ updateItem: "Item Updated" }));
      dispatch({
        type: UPDATE_ITEM,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = (item, quantity) => (dispatch, getState) => {
  axios
    .post(
      "http://localhost:8000/api/",
      { item, quantity },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch(createMessage({ addItem: "Item Added" }));
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const toggleComplete = (id, completed) => (dispatch, getState) => {
  axios
    .patch(
      `http://localhost:8000/api/${id}/`,
      {
        completed
      },
      tokenConfig(getState)
    )
    .then(res => {
      dispatch({
        type: TOGGLE_ITEM,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
