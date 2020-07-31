import React from 'react';
import { shallow } from 'enzyme';

import MovieList from './MovieList';
import { film } from '../../mocks/data';

describe('MovieList component', () => {
  it('should be render correctly', () => {
    const com = shallow(<MovieList movieArr={new Array(6).fill(film)} />);
    expect(com).toMatchSnapshot();
  });

  it('should be render correctly with no films', () => {
    const com = shallow(<MovieList movieArr={[]} />);
    expect(com).toMatchSnapshot();
  });
});
