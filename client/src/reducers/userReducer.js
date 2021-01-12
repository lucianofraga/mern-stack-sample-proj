import { v4 as uuid } from "uuid";
import { GET_USERS, ADD_USER, DELETE_USER } from "../actions/types";

const initialState = {
  users: [
    { id: uuid(), name: "User 1", age: 37 },
    { id: uuid(), name: "User 2", age: 30 },
    { id: uuid(), name: "User 3", age: 21 },
    { id: uuid(), name: "User 4", age: 44 },
    { id: uuid(), name: "User 5", age: 80 },
    { id: uuid(), name: "User 6", age: 80 },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
      };

    default:
      return state;
  }
}
