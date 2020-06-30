import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer component', () => {

  it('should be render correctly', () => {
    const com = shallow(<Footer />);
    expect(com).toMatchSnapshot()
  });

});