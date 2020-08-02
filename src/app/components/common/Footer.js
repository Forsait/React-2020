// @flow
import React from 'react';
// $FlowFixMe
import { createUseStyles } from 'react-jss';

import Brand from './Brand';

const useStyles = createUseStyles({
  container: {
    justifyContent: 'center',
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={`westside ${classes.container}`}>
      <Brand />
    </div>
  );
}
