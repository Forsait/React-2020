import React from 'react';
import { shallow } from 'enzyme';

import Movie from './Movie';
import { film } from '../../mocks/data';

describe('MovieItem component', () => {

  it('should be render correctly', () => {
    const com = shallow(<Movie data={film} />);
    expect(com).toMatchSnapshot()
  });

});
