import React from 'react';
import { shallow } from 'enzyme';

import { MovieInfo } from './MovieInfo';
import { film } from '../../mocks/data.js';

describe('MovieInfo component', () => {

  it('should be render correctly', () => {
    MovieInfo.prototype.componentDidMount = jest.fn();
    const com = shallow(<MovieInfo movie={film} />);
    expect(com).toMatchSnapshot();
  });

});
