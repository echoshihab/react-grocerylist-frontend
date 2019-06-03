import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  RENEW_SUCCESS,
  LOAD_USER,
  LOADED_USER,
  LOAD_ERROR
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  isLoading: false
};

const expirationTime = new Date(new Date().getTime() + 280 * 1000);

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isLoading: true
      };
    case LOADED_USER:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      localStorage.setItem("expirationTime", expirationTime);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case RENEW_SUCCESS:
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("expirationTime", expirationTime);
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
    case LOAD_ERROR:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        acesss: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
}
