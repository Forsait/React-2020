// @flow
import React from 'react';
// $FlowFixMe
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  brand: {
    color: '#F65261',
    fontSize: '20px',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: '24px',
  },
});

type Props = {className?: string};

export default function Brand(props: Props) {
  const classes = useStyles();
  return (
    <div className={`brand ${props.className || ''}  ${classes.brand}`}>
      <span style={{ fontWeight: 800 }}>netflix</span>
      roulette
    </div>
  );
}
