import { movieInfoReducer as reducer, initialState } from './movie';
import {
  GET_MOVIE_INFO_SUC,
  GET_MOVIES_LIST_SUC
} from '../actions/movie-info';

import { film, moviesData } from '../mocks/data';

describe('HOME reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_MOVIE_INFO_SUC', () => {
    expect(
      reducer([], {
        type: GET_MOVIE_INFO_SUC,
        payload: film,
      })
    ).toEqual({
      movieInfo: film,
    });
  });


  it('should handle GET_MOVIES_LIST_SUC', () => {
    expect(
      reducer([], {
        type: GET_MOVIES_LIST_SUC,
        payload: moviesData,
      })
    ).toEqual({
      moviesData: moviesData,
    });
  });

});