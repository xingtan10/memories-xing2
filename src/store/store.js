import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "../reducers/posts";
import authReducer from "../reducers/auth";

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
