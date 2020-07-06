import React from 'react';
import { connect } from 'react-redux';

import MovieInfo from '../containers/movie/MovieInfo';
import MovieList from '../containers/movie/MovieList';
import Footer from '../components/common/Footer';
import { moviesListGoodSelector } from '../selectors';

class MoviePage extends React.Component {

  constructor(props){
    super(props);
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

export default connect(mapStateToProps)(MoviePage);