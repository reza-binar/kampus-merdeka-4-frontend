import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlicer = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

// setPosts and setPostDetails can be accessed in any files in this project
export const { setMovies } = movieSlicer.actions;

// export the global state / reducers
export default movieSlicer.reducer;
