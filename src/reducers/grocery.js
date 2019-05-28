import {
  GET_LIST,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM
} from "../actions/types.js";

const initialState = {
  grocerylist: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        grocerylist: action.payload
      };
    case DELETE_ITEM:
      return {
        ...state,
        grocerylist: state.leads.filter(
          grocery => grocery.id !== action.payload
        )
      };
    case ADD_ITEM:
      return {
        ...state,
        grocerylist: [...state.grocerylist, action.payload]
      };
    case UPDATE_ITEM:
      return {
        ...state,
        grocerylist: action.payload
      };
    default:
      return state;
  }
}
