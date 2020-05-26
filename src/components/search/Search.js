import React from 'react';

import styles from './Search.module.scss';
import Brand from '../common/Brand';
import SearchForm from './SearchForm';
import Radiobuttons from '../common/Radiobuttons';

const options = {
  title: 'Sort by',
  list: [
    {
      key: 'release_date',
      title: 'release date'
    },
    {
      key: 'vote_average',
      title: 'rating'
    }
  ]
};

const checkOptions = {
  title: 'Search by',
  list: [
    {
      key: 'title',
      title: 'title'
    },
    {
      key: 'genres',
      title: 'genre'
    }
  ]
}


export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.sortByChange = this.sortByChange.bind(this);
    this.searchByChange = this.searchByChange.bind(this);

    this.state = {
      isSearchSubmit: false,
      searchBy: 'title',
      sortBy: 'release_date',
      query: '',
    }
  }

  submit(stateNexValue) {
    this.props.submit({
      searchBy: this.state.searchBy,
      query: this.state.query,
      sortBy: this.state.sortBy,
      ...stateNexValue
    });
  }

  submitForm(query) {
    this.setState({
      query,
      isSearchSubmit: true
    });
    this.submit({query});
  }

  sortByChange(sortBy) {
    this.setState({
      sortBy,
      isSearchSubmit: true
    });
    this.submit({sortBy});
  }

  searchByChange(searchBy) {
    this.setState({
      searchBy,
      isSearchSubmit: true
    });
    this.submit({searchBy});
  }

  render() {
    let resTotal = '';
    if (this.state.isSearchSubmit && this.props.resultTotal > 0) {
      resTotal = `${this.props.resultTotal} movie found`
    }

    return (
      <>
        <div className={styles.search}>
          <div className={styles.back_image}></div>
          <Brand className={styles.brand} />

          <div className={styles.form_container}>
            <h1>FIND YOUR MOVIE</h1>
            <SearchForm submitForm={this.submitForm} />
            <Radiobuttons 
              className={styles.t_1} 
              title={checkOptions.title} 
              list={checkOptions.list} 
              change={this.searchByChange}/>
          </div>
        </div>
        <div className={`${styles.result_container} westside`}>
          <div className={styles.q_1}>{resTotal}</div>
          <Radiobuttons 
            className={styles.r_1}
            title={options.title}
            list={options.list}
            change={this.sortByChange}/>
        </div>
      </>
    )
  }
}