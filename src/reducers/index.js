import { combineReducers } from "redux";
import postReducers from "./postReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  post: postReducers,
  users: usersReducer,
});
