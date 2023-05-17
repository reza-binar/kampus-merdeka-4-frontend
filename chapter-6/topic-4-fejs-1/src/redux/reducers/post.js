import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postDetails: null,
};

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setPosts, setPostDetails } = postSlicer.actions;

// export the global state / reducers
export default postSlicer.reducer;
