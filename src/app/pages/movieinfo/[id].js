// @flow
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { getMovieInfo } from '../../actions/movie-info';

import MovieInfo from '../../containers/movie/MovieInfo';
import MovieList from '../../containers/movie/MovieList';
import Footer from '../../components/common/Footer';
import { moviesListGoodSelector } from '../../selectors';

import type { Movie } from '../../models/movie';

function getMovieId(url: string): string {
  const last = url.lastIndexOf('/');
  return url.slice(last + 1);
}

type Props = {
  moviesList: Movie[]
}

export class MoviePage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  /* eslint-disable class-methods-use-this */
  getMovieId() {
    return getMovieId(window.location.href);
  }

  render() {
    const { moviesList } = this.props;
    return (
      <>
        <MovieInfo />
        <MovieList movieArr={moviesList} />
        {/* $FlowFixMe */}
        <Footer />
      </>
    );
  }
}

// $FlowFixMe
MoviePage.getInitialProps = async function name({ store, asPath }) {
  const id = getMovieId(asPath);
  await store.dispatch(getMovieInfo(id));
  return { '1': 1 };
};

function mapStateToProps(state) {
  return { moviesList: moviesListGoodSelector(state.movieInfo) };
}

const mapDispatchToProps = (dispatch) => ({
  getMovieInfo: (id) => dispatch(getMovieInfo(id)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(MoviePage);
