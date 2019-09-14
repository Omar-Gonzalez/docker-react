import {createStore, compose, applyMiddleware} from 'redux';
import combinedReducers from "../reducers/combine.reducer";
import thunk from 'redux-thunk';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combinedReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);