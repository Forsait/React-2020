// @flow
import React from 'react';
import { withRouter } from 'next/router';
import { compose } from 'redux';

import { connect } from 'react-redux';
import { homeChange } from '../../actions/home';

import styles from './Search.module.scss';
import Header from '../../components/common/Header';
import Westside from '../../components/common/Westside';
import SearchForm from '../../components/searchForm/SearchForm';
import Radiobuttons from '../../components/common/Radiobuttons';
import { parseQueryParams, searchParamsToString } from '../../services/url-utils.service';

import type { Radio } from '../../models/radio';

type Props = {
  sortByOptions: Radio,
  searchByOptions: Radio,
  resultTotal: number,
  submit: (any) => void,
}

type State = {
  searchBy: string,
  sortBy: string,
  query: string,
}

type Options = {
  searchBy?: string,
  sortBy?: string,
  query?: string,
}

type submitF = (opt?: Options, updateUrl?: boolean) => void;

type radioChange = (value: string) => void;

export class Search extends React.Component<Props, State> {
  submitForm: submitF;

  sortByChange: radioChange;

  searchByChange: radioChange;

  constructor(props: Props) {
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

  checkQueryParams() {
    const { searchBy = 'title', sortBy = 'release_date', query = '' } = parseQueryParams(window.location.search);
    const nexState = {
      searchBy,
      sortBy,
      query,
    };
    this.setState(nexState);
    this.submit(nexState, false);
  }

  saveQueryParams(query: string) {
    const searchStr = searchParamsToString({ query });
    window.history.replaceState({}, '', location.pathname + searchStr);
  }

  submit(stateNexValue: any = {}, updateUrl: boolean = true) {
    const obj = {
      searchBy: this.state.searchBy,
      query: this.state.query,
      sortBy: this.state.sortBy,
      ...stateNexValue,
    };

    this.props.submit(obj);
    if (updateUrl) {
      this.saveQueryParams(obj.query);
    }
  }

  submitForm(query: Options) {
    // $FlowFixMe
    this.setState({
      query,
    });
    this.submit({ query });
  }

  sortByChange(sortBy: string) {
    this.setState({
      sortBy,
    });
    this.submit({ sortBy });
  }

  searchByChange(searchBy: string) {
    this.setState({
      searchBy,
    });
    this.submit({ searchBy });
  }

  render() {
    let resTotal = '';
    resTotal = `${+this.props.resultTotal} movie found`;

    return (
      <>
        <div className={styles.search}>
          <div className={styles.back_image} />
          <Header className={styles.brand} />

          <div className={styles.form_container}>
            <h1>FIND YOUR MOVIE</h1>
            <SearchForm submitForm={this.submitForm} defaultVal={this.state.query} />
            <Radiobuttons
              className={styles.t_1}
              title={this.props.searchByOptions.title}
              list={this.props.searchByOptions.list}
              change={this.searchByChange}
            />
          </div>
        </div>
        <Westside className={styles.result_container}>
          <div className={styles.q_1}>{resTotal}</div>
          <Radiobuttons
            className={styles.r_1}
            title={this.props.sortByOptions.title}
            list={this.props.sortByOptions.list}
            change={this.sortByChange}
          />
        </Westside>
      </>
    );
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

const mapDispatchToProps = (dispatch) => ({
  submit: (conf) => dispatch(homeChange(conf)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Search);
