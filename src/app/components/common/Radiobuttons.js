// @flow
import React from 'react';

import styles from './Radiobuttons.module.scss';

interface Radio {
  key: string,
  title: string,
}

interface Props {
  className: string,
  title: string,
  list: Radio[],
  change: (e: any) => void,
}

export default class Radiobuttons extends React.Component<Props> {
  changeRadioBind: (e: any) => void;

  constructor(props: Props) {
    super(props);
    this.changeRadioBind = this.changeRadio.bind(this);
  }

  changeRadio(e: any) {
    this.props.change(e.target.value);
  }

  render() {
    const arr = this.props.list.map((item, i) => {
      const id = this.props.title + i;
      return (
        <label key={id} className={styles.radio_item}>
          <input type="radio" name={this.props.title} value={item.key} id={id} defaultChecked={i === 0} />
          <span>{item.title}</span>
        </label>
      );
    });

    return (
      <div className={`${styles.radio_container} r-radio ${this.props.className}`}>
        <span className={styles.title}>{this.props.title}</span>
        <div className={styles.radio_list} onChange={this.changeRadioBind}>
          {arr}
        </div>
      </div>
    );
  }
}
