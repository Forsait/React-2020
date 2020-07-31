import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getMovieInfo, GET_MOVIE_INFO_SUC, GET_MOVIES_LIST_SUC } from './movie-info';

import { moviesData, film } from '../mocks/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const serviceResponses = {
  '/api/movies/': film,
  '/api/movies?': moviesData,
};

describe('Home component', () => {
  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('creates GET_HOME_FIMLS_SUC when fetching films has been done', async () => {
    global.fetch = jest.fn().mockImplementation((url) => Promise.resolve({
      json: () => {
        for (const key in serviceResponses) {
          if (url.indexOf(key) !== -1) {
            return Promise.resolve(serviceResponses[key]);
          }
        }
      },
    }));

    const expectedActions = [
      { type: GET_MOVIE_INFO_SUC, payload: film },
      { type: GET_MOVIES_LIST_SUC, payload: moviesData },
    ];

    const store = mockStore();

    return store.dispatch(getMovieInfo(123)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
