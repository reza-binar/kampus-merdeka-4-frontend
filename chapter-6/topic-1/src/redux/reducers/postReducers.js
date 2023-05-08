import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  posts: [],
};

// Define the reducers
const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

// Export the actions (to set/change the state)
export const { setPosts } = postSlicer.actions;

// Export the reducers (state / store)
export default postSlicer.reducer;
