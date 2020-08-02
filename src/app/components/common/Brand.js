// @flow
import React from 'react';
// $FlowFixMe
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  brandos: {
    color: '#F65261',
    fontSize: '20px',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: '24px',
  },
});

/* eslint-disable */
type Props = {className?: string};

export default function Brand(props: Props) {
  const classes = useStyles();
  const { className } = props;
  return (
    <div className={`brand ${className || ''}  ${classes.brandos}`}>
      <span style={{ fontWeight: 800 }}>netflix</span>
      roulette
    </div>
  );
}
