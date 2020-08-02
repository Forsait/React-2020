import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import { rootReducer } from './reducers/index';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

const initStore = () => createStore(reducer, applyMiddleware(thunkMiddleware));

export const wrapper = createWrapper(initStore);
