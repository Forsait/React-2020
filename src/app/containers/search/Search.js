import React from 'react';

import { connect } from 'react-redux';
import { homeChange } from '../../actions/home';

import styles from './Search.module.scss';
import Header from '../../components/common/Header';
import Westside from '../../components/common/Westside';
import SearchForm from '../../components/searchForm/SearchForm';
import Radiobuttons from '../../components/common/Radiobuttons';

export class Search extends React.Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.sortByChange = this.sortByChange.bind(this);
    this.searchByChange = this.searchByChange.bind(this);

    this.state = {
      searchBy: 'title',
      sortBy: 'release_date',
      query: '',
    };
  }

  componentDidMount() {
    this.submit();
  }

  submit(stateNexValue = {}) {
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
    });
    this.submit({query});
  }

  sortByChange(sortBy) {
    this.setState({
      sortBy,
    });
    this.submit({sortBy});
  }

  searchByChange(searchBy) {
    this.setState({
      searchBy,
    });
    this.submit({searchBy});
  }

  render() {
    let resTotal = '';
    if (this.state.isSearchSubmit) {
      resTotal = `${+this.props.resultTotal} movie found`;
    }

    return (
      <>
        <div className={styles.search}>
          <div className={styles.back_image}></div>
          <Header className={styles.brand} />

          <div className={styles.form_container}>
            <h1>FIND YOUR MOVIE</h1>
            <SearchForm submitForm={this.submitForm} />
            <Radiobuttons 
              className={styles.t_1} 
              title={this.props.searchByOptions.title} 
              list={this.props.searchByOptions.list} 
              change={this.searchByChange}/>
          </div>
        </div>
        <Westside className={styles.result_container}>
          <div className={styles.q_1}>{resTotal}</div>
          <Radiobuttons 
            className={styles.r_1}
            title={this.props.sortByOptions.title}
            list={this.props.sortByOptions.list}
            change={this.sortByChange}/>
        </Westside>
      </>
    )
  }
}

function mapStateToProps(state) {
  const { moviesData, searchByOptions, sortByOptions } = state.home;
  return {
    movies: moviesData,
    searchByOptions,
    sortByOptions,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    submit: conf => dispatch(homeChange(conf))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);