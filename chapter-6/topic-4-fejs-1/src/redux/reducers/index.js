import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import auth from "./auth";

export default combineReducers({
  post,
  auth,
});
