import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createWrapper } from "next-redux-wrapper";
import { HYDRATE } from "next-redux-wrapper";

import { rootReducer, initialState } from './reducers/index';

const reducer = (state, action) => {
  if(action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action)
  }
}

const initStore = (data) => {
  return createStore(reducer, applyMiddleware(thunkMiddleware))
}

export const wrapper = createWrapper(initStore);