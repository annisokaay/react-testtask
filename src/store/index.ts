import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth-reducer';
import { picturesReducer } from './reducers/pictures-reducer';
import { postsReducer } from './reducers/posts-reducer';
import { profileReducer } from './reducers/profile-reducer';

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  pictures: picturesReducer,
  posts: postsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
