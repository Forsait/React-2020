import React from 'react';
import { shallow } from 'enzyme';

import { MoviePage } from './MoviePage';
import { film } from '../mocks/data';

describe('Home component', () => {

  it('should be render correctly', () => {
    MoviePage.prototype.componentDidMount = jest.fn();
    const com = shallow(<MoviePage movieArr={[]} />);
    expect(com).toMatchSnapshot();
  })

});