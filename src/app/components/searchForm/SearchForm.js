import React from 'react';

import styles from './SearchForm.module.scss';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.submitSearch = this.submitSearch.bind(this);
    this.input = React.createRef();
  }

  submitSearch(e) {
    e.preventDefault();
    this.props.submitForm(this.input.current.value);
  }

  render() {
    return (
      <form className={styles.wrap} onSubmit={this.submitSearch}>
        <div className={styles.m_12}>
          <input ref={this.input} type="text" placeholder="Search" defaultValue={this.props.defaultVal} />
          <button className={styles.btn_submit} type="submit">Search</button>
        </div>
      </form>
    )
  }
}
