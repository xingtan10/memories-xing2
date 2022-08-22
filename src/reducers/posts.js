import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    FETCH_ALL: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.posts = action.payload;
    },
    CREATE: (state, action) => {
      state.posts.push(action.payload);
    },

    UPDATE_POST: (state, action) => {
      // state.posts.map((post) =>
      //   post._id === action.payload._id ? action.payload : post
      // );
      state.posts.splice[
        state.posts.findIndex((item) => item._id === action.payload)
      ] = action.payload.posts;
    },

    DELETE_POST: (state, action) => {
      // state.posts.filter((post) => post._id !== action.payload);
      state.posts.splice(
        state.posts.findIndex((item) => item._id === action.payload),
        1
      );
    },

    LIKE_POST: (state, action) => {
      state.posts.splice[
        state.posts.findIndex((item) => item._id === action.payload)
      ] = action.payload.posts;
    },

    FETCH_BY_SEARCH: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const {
  FETCH_ALL,
  CREATE,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
  FETCH_BY_SEARCH,
} = postSlice.actions;
export default postSlice.reducer;
