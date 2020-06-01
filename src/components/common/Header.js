import React from 'react';

import styles from './Header.module.scss';
import Brand from './Brand';

export default function Header(props) {
  return <div className={`${styles.sub_header} ${props.className || ''}`}>
    <Brand />
    {props.children}
  </div>
}