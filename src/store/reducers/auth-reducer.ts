import { AnyAction } from 'redux';
import { LOGIN_USER, SET_ERROR_MESSAGE, TOGGLE_AUTH } from '../actions';

const initialState = {
  isAuth: localStorage.getItem('isAuth'),
  credentials: {
    login: null,
    password: null,
  },
  errorMessage: null,
};

export const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        credentials: action.payload,
      };

    case TOGGLE_AUTH:
      return {
        ...state,
        isAuth: true,
      };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export const loginUser = (credentials: {
  username: string;
  password: string;
}) => (dispatch: any) => {
  dispatch({ type: LOGIN_USER, payload: credentials });
  if (credentials.username === 'Admin' && credentials.password === '12345') {
    dispatch({ type: TOGGLE_AUTH });
    dispatch({ type: SET_ERROR_MESSAGE, payload: null });
    localStorage.setItem('isAuth', 'true');
  } else {
    dispatch({
      type: SET_ERROR_MESSAGE,
      payload: 'Имя пользователя или пароль введены не верно',
    });
  }
};
