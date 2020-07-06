import React from 'react';
import { shallow } from 'enzyme';
import { act } from "react-dom/test-utils";

import { Home } from './Home';
import { film } from '../mocks/data';

describe('Home component', () => {

  it('should be render correctly', async () => {
    const movies = new Array(6).fill(film);
    const com = shallow(<Home movies={movies} />);
    expect(com).toMatchSnapshot()
  });

});
