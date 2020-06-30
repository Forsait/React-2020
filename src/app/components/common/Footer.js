import React from 'react';

import Brand from './Brand';

const footerStyle = {
  justifyContent: 'center',
};

export default class Footer extends React.Component {
  render() {
    return <div style={footerStyle} className={'westside'}>
      <Brand />
    </div>
  }
}