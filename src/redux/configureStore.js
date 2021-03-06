import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';
import filterReducer from './filter/filter';

const reducer = combineReducers({
  booksReducer,
  filterReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
