import { AnyAction } from 'redux';
import { toggleIsFetching } from '../actions';
import API from '../../api';
import { SET_POSTS } from '../actions';

const initialState = {
  posts: [],
  isFetching: false,
};

export const postsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export const asyncGetPosts = () => (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  API.fetchPosts().then((data) => {
    dispatch({ type: SET_POSTS, payload: data.slice(0, 20) });
    dispatch(toggleIsFetching(false));
  });
};
