import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todosReducer from './reducers/index';

const store = createStore(todosReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;
