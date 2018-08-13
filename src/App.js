import React from 'react';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <SearchableMovieReviewsContainer />
        <LatestMovieReviewsContainer />
      </div>
    )
  }
}

export default App
