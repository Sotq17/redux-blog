import { combineReducers } from "redux";
import postsReducer from "./PostsReducer";
import usersReducer from "./usersReducers";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
