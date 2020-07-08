import React from 'react';
import { shallow } from 'enzyme';

import { Search } from './Search';
import { radioOptions, moviesData } from '../../mocks/data';

describe('Search component', () => {

  it('should be render correctly', () => {
    const submit = jest.fn();
    Search.prototype.submit = submit;
    const com = shallow(<Search movies={moviesData} searchByOptions={radioOptions} sortByOptions={radioOptions} />);
    expect(com).toMatchSnapshot()
  });

  it('Should run submit method after submit form', () => {
    const submit = jest.fn();
    Search.prototype.submit = submit;
    const com = shallow(<Search movies={moviesData} searchByOptions={radioOptions} sortByOptions={radioOptions} />);
    com.instance().submitForm('value');
    expect(submit).toHaveBeenCalledWith({query: 'value'})
  });

  it('Should run submit method after sortBy change', () => {
    const submit = jest.fn();
    Search.prototype.submit = submit;
    const com = shallow(<Search movies={moviesData} searchByOptions={radioOptions} sortByOptions={radioOptions} />);
    com.instance().sortByChange('value');
    expect(submit).toHaveBeenCalledWith({sortBy: 'value'})
  });

  it('Should run submit method after searchBy change', () => {
    const submit = jest.fn();
    Search.prototype.submit = submit;
    const com = shallow(<Search movies={moviesData} searchByOptions={radioOptions} sortByOptions={radioOptions} />);
    com.instance().searchByChange('value');
    expect(submit).toHaveBeenCalledWith({searchBy: 'value'})
  });

});
