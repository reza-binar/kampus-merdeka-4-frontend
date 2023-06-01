import { combineReducers } from "@reduxjs/toolkit";
import post from "./post";
import auth from "./auth";
import movie from "./movie";

export default combineReducers({
  post,
  auth,
  movie,
});
