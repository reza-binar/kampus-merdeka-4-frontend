import { combineReducers } from "@reduxjs/toolkit";
import postReducers from "./postReducers";
import authReducers from "./authReducers";

// We will have some reducers here
export default combineReducers({
  post: postReducers,
  auth: authReducers,
});
