import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';

const NullComp = () => null;

describe('ErrorBoundary', () => {
  it('should display an ErrorMessage if wrapped component throws', () => {
    const com = shallow(
      <ErrorBoundary>
        <NullComp />
      </ErrorBoundary>,
    );

    const error = new Error('test');

    com.find(NullComp).simulateError(error);

    expect(com).toMatchSnapshot();
  });
});
