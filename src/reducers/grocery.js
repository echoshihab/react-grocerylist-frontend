import {
  GET_LIST,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
  TOGGLE_ITEM
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
        grocerylist: state.grocerylist.filter(
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
        grocerylist: state.grocerylist.map(grocery =>
          grocery.id === action.payload.id
            ? {
                ...grocery,
                item: action.payload.item,
                quantity: action.payload.quantity
              }
            : grocery
        )
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        grocerylist: state.grocerylist.map(grocery =>
          grocery.id === action.payload.id
            ? {
                ...grocery,
                completed: action.payload.completed
              }
            : grocery
        )
      };
    default:
      return state;
  }
}
