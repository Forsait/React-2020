import React from 'react';

import styles from './Brand.module.scss'

export default class Brand extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`${this.props.className || ''}  ${styles.brand}`}>
        <span style={{fontWeight: 800}}>netflix</span>roulette
      </div>
    )
  }
}