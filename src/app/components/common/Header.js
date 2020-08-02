// @flow
import React from 'react';
import type { Node } from 'react';
// $FlowFixMe
import { createUseStyles } from 'react-jss';

import Brand from './Brand';

const useStyles = createUseStyles({
  sub_header: {
    height: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '60px',
    paddingRight: '38px',
  },
});

/* eslint-disable */
type Props = {className?: string, children?: Node};

export default function Header(props: Props) {
  const classes = useStyles();
  const { className, children } = props;
  return (
    <div className={`${classes.sub_header} ${className || ''}`}>
      <Brand />
      {children}
    </div>
  );
}
