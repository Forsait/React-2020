import React from 'react';

import styles from './Radiobuttons.module.scss';

export default class Radiobuttons extends React.Component {

  constructor(props) {
    super(props);
    this.changeRadio = this.changeRadio.bind(this);
  }

  changeRadio(e) {
    this.props.change(e.target.value);
  }

  render() {
    const arr = this.props.list.map((item, i) => {
      const id = this.props.title + i;
      return <label key={id} className={styles.radio_item}>
        <input type="radio" name={this.props.title} value={item.key} id={id} defaultChecked={i === 0}/>
        <span>{item.title}</span>
      </label>
    })

    return (
      <div className={styles.radio_container + ' ' + this.props.className}>
        <span className={styles.title}>{this.props.title}</span>
        <div className={styles.radio_list} onChange={this.changeRadio}>
          {arr}
        </div>
      </div>
    )
  }
}