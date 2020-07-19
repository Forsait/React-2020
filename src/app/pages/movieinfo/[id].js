import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router'

import { getMovieInfo } from '../../actions/movie-info';

import MovieInfo from '../../containers/movie/MovieInfo';
import MovieList from '../../containers/movie/MovieList';
import Footer from '../../components/common/Footer';
import { moviesListGoodSelector } from '../../selectors';

export class MoviePage extends React.Component {

  constructor(props){
    super(props);
  }

  getMovieId() {
    const href = window.location.href;
    const last = href.lastIndexOf('/');
    return href.slice(last + 1);
  }

  componentDidMount() {
    this.props.router.events.on('routeChangeComplete', (url) => {
      this.props.getMovieInfo( this.getMovieId() );
    })
  }

  render() {
    return <>
      <MovieInfo />
      <MovieList movieArr={this.props.moviesList}/>
      <Footer />
    </>
  }

}


function mapStateToProps(state) {
  return { moviesList: moviesListGoodSelector(state.movieInfo) };
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieInfo: id => dispatch(getMovieInfo(id))
  }
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(MoviePage) );