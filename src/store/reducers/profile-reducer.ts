import { AnyAction } from 'redux';
import { toggleIsFetching } from '../actions';
import API from '../../api';
import { SET_PROFILE } from '../actions';

const initialState = {
  profile: {},
  isFetching: false,
};

export const profileReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export const asyncGetProfile = () => (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  API.fetchProfile().then((data) => {
    dispatch({ type: SET_PROFILE, payload: data });
    dispatch(toggleIsFetching(false));
  });
};
