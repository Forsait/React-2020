// @flow
import React from 'react';

import Brand from './Brand';

const footerStyle = {
  justifyContent: 'center',
};

export default class Footer extends React.Component<void> {
  render() {
    return (
      <div style={footerStyle} className="westside">
        <Brand />
      </div>
    );
  }
}
