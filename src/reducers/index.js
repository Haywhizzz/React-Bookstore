import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const reducers = combineReducers({
  booksReducer,
  filterReducer,
});

export default reducers;
