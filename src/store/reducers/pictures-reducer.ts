import { AnyAction } from 'redux';
import { toggleIsFetching } from '../actions';
import API from '../../api';
import { SET_PICTURES, TOGGLE_IS_FETCHING } from '../actions';

const initialState = {
  pictures: [],
  isFetching: false,
};

export const picturesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PICTURES:
      return {
        ...state,
        pictures: action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};

export const asyncGetPictures = () => (dispatch: any) => {
  dispatch(toggleIsFetching(true));
  API.fetchPictures().then((data) => {
    dispatch({ type: SET_PICTURES, payload: data.slice(0, 20) });
    dispatch(toggleIsFetching(false));
  });
};
