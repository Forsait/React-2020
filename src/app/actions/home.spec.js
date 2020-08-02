import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { GET_HOME_FIMLS_SUC, homeChange } from './home';

import { moviesData } from '../mocks/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Home component', () => {
  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('creates GET_HOME_FIMLS_SUC when fetching films has been done', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(moviesData),
    }));

    const expectedActions = [
      { type: GET_HOME_FIMLS_SUC, payload: moviesData },
    ];

    const store = mockStore();

    return store.dispatch(homeChange({})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
