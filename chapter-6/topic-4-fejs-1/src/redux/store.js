import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";

// Create the temporary db / state / store
export default configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === "development",
});
