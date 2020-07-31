import React from 'react';
import { shallow } from 'enzyme';

import Brand from './Brand';

describe('Brand component', () => {
  it('should be render correctly', () => {
    const com = shallow(<Brand />);
    expect(com).toMatchSnapshot();
  });
});
