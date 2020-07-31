// @flow
import React from 'react';
import type { Node } from 'react';

import styles from './Header.module.scss';
import Brand from './Brand';

type Props = {className?: string, children?: Node};

export default function Header(props: Props) {
  return (
    <div className={`${styles.sub_header} ${props.className || ''}`}>
      <Brand />
      {props.children}
    </div>
  );
}
