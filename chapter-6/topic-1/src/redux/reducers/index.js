import { combineReducers } from "@reduxjs/toolkit";
import postReducers from "./postReducers";

// We will have some reducers here
export default combineReducers({
  post: postReducers,
});
