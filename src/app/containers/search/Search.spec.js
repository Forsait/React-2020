import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search component', () => {

  it('should be render correctly', () => {
    const com = shallow(<Search />);
    expect(com).toMatchSnapshot()
  });

});
