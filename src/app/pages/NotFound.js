import React from 'react';

import styles from './NotFound.module.scss';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.not_found}>
        Not Found
      </div>
    );
  }
}
