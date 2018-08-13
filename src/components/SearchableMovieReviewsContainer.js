import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  componentDidMount() {
    this.updateReview()
  }

  updateReview = () => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then( resp => resp.json() )
      .then( reviews => this.setState({
                          reviews: reviews.results
                        }))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.updateReview()
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}


export default SearchableMovieReviewsContainer
