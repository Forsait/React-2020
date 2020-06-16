import React from 'react';
import { shallow } from 'enzyme';

import MovieList from './MovieList';

describe('MovieList component', () => {

  it('should be render correctly', () => {
    const com = shallow(<MovieList movieArr={[]} />);
    expect(com).toMatchSnapshot()
  });

});
