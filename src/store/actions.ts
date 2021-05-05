export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const SET_PICTURES = 'SET_PICTURES';
export const SET_POSTS = 'SET_POSTS';
export const LOGIN_USER = 'LOGIN_USER';
export const TOGGLE_AUTH = 'TOGGLE_AUTH';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const toggleIsFetching = (isFetching: boolean) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});
