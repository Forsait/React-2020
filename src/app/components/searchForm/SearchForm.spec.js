import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from './SearchForm';

describe('SearchForm component', () => {

  it('should be render correctly', () => {
    const com = shallow(<SearchForm />);
    expect(com).toMatchSnapshot()
  });

  it('should benn called submitSearch', () => {
    const submitSearch = jest.fn();
    const com = shallow(<SearchForm />);
    com.instance().submitSearch = submitSearch;
    com.instance().forceUpdate();
    com.find('form').simulate('submit');
    expect(submitSearch).toHaveBeenCalled();
  });

});