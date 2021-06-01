import { combineReducers } from 'redux';
import booksReducer from './books';

const reducers = combineReducers({
  booksReducer,
});

export default reducers;
