// @flow
import React from 'react';
import { connect } from 'react-redux';

import Search from '../containers/search/Search';
import MovieList from '../containers/movie/MovieList';
import Footer from '../components/common/Footer';
import { moviesDataSelector } from '../selectors';
import { homeChange } from '../actions/home';

import type { MovieData } from '../models/movie';

type Props = {
  movies: MovieData
}

export class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        <Search />
        <MovieList movieArr={this.props.movies.data} />
        {/* $FlowFixMe */}
        <Footer />
      </>
    );
  }
}

// $FlowFixMe
Home.getInitialProps = async function ({ store, query }) {
  const storeHome = store.getState().home;
  const conf = {
    searchBy: storeHome.searchBy,
    query: query.query || storeHome.query,
    sortBy: storeHome.sortBy,
  };
  await store.dispatch(homeChange(conf));
  return { '1': 1 };
};

function mapStateToProps(state) {
  return { movies: moviesDataSelector(state.home) };
}

export default connect(mapStateToProps)(Home);
