import React from 'react';
import { connect } from 'react-redux';

import { getMovieInfo } from '../actions/movie-info';

import MovieInfo from '../containers/movie/MovieInfo';
import MovieList from '../containers/movie/MovieList';
import Footer from '../components/common/Footer';
import { moviesListGoodSelector } from '../selectors';

export class MoviePage extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getMovieInfo(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.getMovieInfo(this.props.match.params.id);
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);