import React, { Component } from 'react';
//import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '616e72163e1e422db664700eebc85be8';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

//    https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>


class SearchableMovieReviewsContainer extends Component {

  state={
    reviews: [],
    searchTerm: '',
  }

  componentDidMount() {
    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  handleSearchInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={ this.handleSubmit }>
          Search by movie title:
          <br></br>
          <input type="text" onChange={ this.handleSearchInputChange } />
          <button type="submit">Submit</button>
        </form>
        { this.state.reviews.length > 0 && <h2>Movie Review For:</h2> }
        <MovieReviews reviews={ this.state.reviews } searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
