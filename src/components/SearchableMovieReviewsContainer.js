import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting')
    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(reviews => {
      this.setState({
        reviews: reviews.results
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input
            name="searchTerm"
            onChange={this.handleChange}
            value={this.state.searchTerm}
            placeholder='search'/>
            <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
