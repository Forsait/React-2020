import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'

import { getMovieInfo } from '../../actions/movie-info';

import MovieInfo from '../../containers/movie/MovieInfo';
import MovieList from '../../containers/movie/MovieList';
import Footer from '../../components/common/Footer';
import { moviesListGoodSelector } from '../../selectors';

function getMovieId(url) {
  const last = url.lastIndexOf('/');
  return url.slice(last + 1);
}

export class MoviePage extends React.Component {

  constructor(props){
    super(props);
  }

  getMovieId() {
    return getMovieId(window.location.href);
  }

  // componentDidMount() {
  //   this.props.router.events.on('routeChangeComplete', (url) => {
  //     this.props.getMovieInfo( this.getMovieId() );
  //   })
  // }

  render() {
    return <>
      <MovieInfo />
      <MovieList movieArr={this.props.moviesList}/>
      <Footer />
    </>
  }

}

MoviePage.getInitialProps = async function({store, asPath}) {
  const id = getMovieId(asPath);
  await store.dispatch(getMovieInfo(id));
  return {1: 1}
}


function mapStateToProps(state) {
  return { moviesList: moviesListGoodSelector(state.movieInfo) };
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieInfo: id => dispatch(getMovieInfo(id))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MoviePage);