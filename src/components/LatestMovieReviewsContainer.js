import React, { Component } from 'react';
//import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = '616e72163e1e422db664700eebc85be8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {

  state={
    reviews: []
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(reviews => this.setState({ reviews: reviews.results }))
  }

  render() {
    // console.log(this.state.reviews)
    return (
      <div className='latest-movie-reviews'>
        <h2>The Latest Reviews:</h2>
        < MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;


//   https://api.nytimes.com/svc/movies/v2/reviews/all.json
//  616e72163e1e422db664700eebc85be8


//    npm install --save isomorphic-fetch es6-promise


// require('es6-promise').polyfill();
// require('isomorphic-fetch');
//
// fetch(URL)
// 	.then(function(response) {
// 		if (response.status >= 400) {
// 			throw new Error("Bad response from server");
// 		}
// 		return response.json();
// 	})
// 	.then(function(stories) {
// 		console.log(stories);
// 	});
