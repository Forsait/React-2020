import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header component', () => {
  it('should be render correctly', () => {
    const com = shallow(<Header />);
    expect(com).toMatchSnapshot();
  });
});
