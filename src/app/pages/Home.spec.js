import React from 'react';
import { shallow } from 'enzyme';
import { act } from "react-dom/test-utils";

import Home from './Home';
import { film } from '../mocks/data';

describe('Home component', () => {

  fit('should be render correctly', async () => {
    const data = new Array(6).fill(film);
    global.fetch = jest.fn().mockImplementation((data) => {
      return Promise.resolve({
        json: () => Promise.resolve(data)
      })}
    );

    await act(async () => {
      const com = shallow(<Home />);
      expect(com).toMatchSnapshot()
    });

    global.fetch.mockClear();
    delete global.fetch;
  });

});
