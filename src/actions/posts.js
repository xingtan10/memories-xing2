import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
  FETCH_BY_SEARCH,
} from "../reducers/posts";

export const getPosts = (page) => async (dispatch) => {
  try {
    const res = await api.fetchPosts(page);
    // console.log(res.data);
    dispatch(FETCH_ALL(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch(FETCH_BY_SEARCH(data));
    // dispatch(FETCH_ALL(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const res = await api.createPosts(post);
    console.log(res.data);
    // dispatch({ type: "create", payload: res.data });
    dispatch(CREATE(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const res = await api.updatePost(id, post);
    // console.log(res.data);
    dispatch(UPDATE_POST(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    // console.log(res.data);
    dispatch(DELETE_POST(id));
  } catch (err) {
    console.log(err);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const res = await api.likePost(id);
    // console.log(res.data);
    dispatch(LIKE_POST(res.data));
  } catch (err) {
    console.log(err);
  }
};
