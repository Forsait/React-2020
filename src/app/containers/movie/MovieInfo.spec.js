import React from 'react';
import { render } from '../../utils/test-utils';

import MovieInfo from './MovieInfo';
import { film } from '../../mocks/data.js';

describe('MovieInfo component', () => {

  it('should be render correctly', () => {
    const com = shallow(<MovieInfo movie={film} />);
    expect(com).toMatchSnapshot()
  });

});
