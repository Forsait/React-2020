// @flow
import React from 'react';
import type { Node } from 'react';
// $FlowFixMe
import { createUseStyles } from 'react-jss';

type Props = {
  className: string,
  children: Node,
};

const useStyles = createUseStyles({
  westside: {
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    margin: '0 120px',
  },
});

export default function Westside(props: Props) {
  const classes = useStyles();
  const { className, children } = props;
  return (
    <div className={`${classes.westside} ${className || ''}`}>
      {children}
    </div>
  );
}
