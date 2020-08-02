import { combineReducers } from 'redux';

import { homeReducer, initialState as homeState } from './home';
import { movieInfoReducer, initialState as movieInfoState } from './movie';

export const initialState = { home: homeState, movieInfo: movieInfoState };

export const rootReducer = combineReducers({
  home: homeReducer,
  movieInfo: movieInfoReducer,
});
