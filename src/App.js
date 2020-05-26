import React from 'react';

import ErrorBoundary from './components/error/ErrorBoundary';
import Home from './components/home/Home';
import MoviePage from './components/movie/MoviePage';


export default class App extends React.Component {
  render() {
    return (
      <div className='main_container'>
        <ErrorBoundary>
          <MoviePage />
          <div style={{height: '50px', backgroundColor: '#ffffff'}}></div>
          <Home />
        </ErrorBoundary>
      </div>
    )
  }
}
