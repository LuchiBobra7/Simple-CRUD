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
  } from "../actions/types";

const initialState = {
  list: [],
  post: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POSTS_START:
      return {
        ...state
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        list: payload.posts
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        err: payload,
        error: true
      };
    case GET_POST_START:
      return {
        ...state
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: payload.post
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        err: payload,
        error: true
      };  
    case ADD_POST_START:
      return {
        ...state
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        post: payload.post
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        err: payload,
        error: true
      };  
    case EDIT_POST_START:
      return {
        ...state
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        editPost: payload.success,
        post: payload.post
      };
    case EDIT_POST_FAILURE:
      return {
        ...state,
        err: payload,
        error: true
      };    
    case DELETE_POST_START:
      return {
        ...state
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        postDeleted: payload
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        err: payload,
        error: true
      };    

    default:
      return state;
  }
}
