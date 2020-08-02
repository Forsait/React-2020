import React from 'react';

import styles from './SearchForm.module.scss';

import Button from '../common/Button';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitSearch = this.submitSearch.bind(this);
    this.input = React.createRef();
  }

  submitSearch(e) {
    e.preventDefault();
    const val = this.input.current.value;
    /* eslint-disable */
    this.props.submitForm(val);
  }

  render() {
    const { defaultVal } = this.props;
    return (
      <form className={styles.wrap} onSubmit={this.submitSearch}>
        <div className={styles.m_12}>
          <input ref={this.input} type="text" placeholder="Search" defaultValue={defaultVal} />
          <Button type="submit">Search</Button>
        </div>
      </form>
    );
  }
}
