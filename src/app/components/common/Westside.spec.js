import React from 'react';
import { shallow } from 'enzyme';

import Westside from './Westside';

describe('Westside component', () => {
  it('should be render correctly', () => {
    const com = shallow(<Westside />);
    expect(com).toMatchSnapshot();
  });
});
