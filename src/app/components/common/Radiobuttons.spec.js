import React from 'react';
import { shallow } from 'enzyme';

import Radiobuttons from './Radiobuttons';

const options = {
  title: 'Title',
  list: [
    {
      key: 'key',
      title: 'title'
    },
    {
      key: 'key 1',
      title: 'title 1'
    }
  ]
};

describe('Radiobuttons component', () => {

  it('should be render correctly', () => {
    const com = shallow(<Radiobuttons title={options.title} list={options.list} />);
    expect(com).toMatchSnapshot()
  });

  it('renders list radiobuttons', () => {
    const com = shallow(<Radiobuttons title={options.title} list={options.list} />);
    expect(com.find('label').length).toEqual(options.list.length);
  });

});