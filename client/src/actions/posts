import api from "../api";

import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from "./types";

export const getPosts = data => async dispatch => {
  dispatch({
    type: GET_POSTS_START
  });

  try {
    const posts = await api.posts.getPosts();
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: posts
    });
  } catch (err) {
    dispatch({
      type: GET_POSTS_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const getPost = data => async dispatch => {
  dispatch({
    type: GET_POST_START
  });

  try {
    const post = await api.posts.getPost(data);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: post
    });
  } catch (err) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const addPost = data => async dispatch => {
  dispatch({
    type: ADD_POST_START
  });

  try {
    const post = await api.posts.addPost(data);
    dispatch({
      type: ADD_POST_SUCCESS,
      payload: post
    });
  } catch (err) {
    dispatch({
      type: ADD_POST_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const editPost = data => async dispatch => {
  dispatch({
    type: EDIT_POST_START
  });
  
  try {
    const post = await api.posts.editPost(data);
    console.log(post)
    dispatch({
      type: EDIT_POST_SUCCESS,
      payload: post
    });
  } catch (err) {
    dispatch({
      type: EDIT_POST_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const deletePost = id => async dispatch => {
  dispatch({
    type: DELETE_POST_START
  });

  try {
    const post = await api.posts.deletePost(id);
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: post
    });
  } catch (err) {
    dispatch({
      type: DELETE_POST_FAILURE,
      payload: err,
      error: true
    });
  }
};
