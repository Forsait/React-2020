import { homeReducer as reducer, initialState } from './home';
import {
  HOME_CHANGE,
  GET_HOME_FIMLS_SUC,
} from '../actions/home';

import { moviesData } from '../mocks/data';

describe('HOME reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle HOME_CHANGE', () => {
    expect(
      reducer([], {
        type: HOME_CHANGE,
        payload: {
          searchBy: 'searchBy',
          sortBy: 'sortBy',
        }
      })
    ).toEqual({
      searchBy: 'searchBy',
      sortBy: 'sortBy',
    });
  });


  it('should handle GET_HOME_FIMLS_SUC', () => {
    expect(
      reducer([], {
        type: GET_HOME_FIMLS_SUC,
        payload: moviesData
      })
    ).toEqual({ moviesData });
  });

});
