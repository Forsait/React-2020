import React from 'react';
import { shallow } from 'enzyme';
import { act } from "react-dom/test-utils";

import MoviePage from './MoviePage';
import { film } from '../mocks/data';

describe('Home component', () => {

  const serviceResponses = {
    '/api/movies/': film,
    '/api/movies?': new Array(6).fill(film),
  };

  it('should be render correctly', async () => {
    const data = new Array(6).fill(film);
    global.fetch = jest.fn().mockImplementation((url) => Promise.resolve({
        json: () => {
          for (let key in serviceResponses) {
            if(url.indexOf(key) !== -1) {
              return Promise.resolve(serviceResponses[key]);
            }
          }
        }
      })
    );

    await act(async () => {
      const com = shallow(<MoviePage />);
      expect(com).toMatchSnapshot()
    });

    global.fetch.mockClear();
    delete global.fetch;
  })

});