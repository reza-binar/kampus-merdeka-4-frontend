import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

// Create the store
export default configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // It not necessary if your feature is not too complex, you can just comment this line if you don't need it
});
