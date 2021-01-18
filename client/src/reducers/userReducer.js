import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((p) => p._id !== action.payload),
      };

    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
