import React from 'react';
import { connect } from 'react-redux';

import Search from '../containers/search/Search';
import MovieList from '../containers/movie/MovieList';
import Footer from '../components/common/Footer';
import { moviesDataSelector } from '../selectors';
import { homeChange } from '../actions/home';

export class Home extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
        <Search />
        <MovieList movieArr={this.props.movies.data}/>
        <Footer />
      </>
    )
  }
}


function mapStateToProps(state) {
  return { movies: moviesDataSelector(state.home) };
}

export default connect(mapStateToProps)(Home);