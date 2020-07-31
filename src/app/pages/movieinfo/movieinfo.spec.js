import React from 'react';
import { shallow } from 'enzyme';

import { MoviePage } from './[id]';

describe('Home component', () => {
  it('should be render correctly', () => {
    MoviePage.prototype.componentDidMount = jest.fn();
    const com = shallow(<MoviePage movieArr={[]} />);
    expect(com).toMatchSnapshot();
  });
});
