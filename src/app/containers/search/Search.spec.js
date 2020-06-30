import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search component', () => {

  it('should be render correctly', () => {
    const com = shallow(<Search />);
    expect(com).toMatchSnapshot()
  });

  it('Should run submit method after submit form', () => {
    const submit = jest.fn();
    Search.prototype.submit = submit;
    const com = shallow(<Search />);
    com.instance().submitForm('value');
    expect(submit).toHaveBeenCalledWith({query: 'value'})
  });

  it('Should run submit method after sortBy change', () => {
    const submit = jest.fn();
    Search.prototype.submit = submit;
    const com = shallow(<Search />);
    com.instance().sortByChange('value');
    expect(submit).toHaveBeenCalledWith({sortBy: 'value'})
  });

  it('Should run submit method after searchBy change', () => {
    const submit = jest.fn();
    Search.prototype.submit = submit;
    const com = shallow(<Search />);
    com.instance().searchByChange('value');
    expect(submit).toHaveBeenCalledWith({searchBy: 'value'})
  });

});
