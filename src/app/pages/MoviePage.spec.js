import React from 'react';
import { shallow } from 'enzyme';

import { MoviePage } from './MoviePage';
import { film } from '../mocks/data';

describe('Home component', () => {

  it('should be render correctly', () => {
    const com = shallow(<MoviePage movieArr={[]} />);
    expect(com).toMatchSnapshot();
  })

});