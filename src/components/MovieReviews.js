import React from 'react'

const filterByMovieTitle = (reviews, searchTerm) => {
  return reviews.filter(rev => rev.display_title.toLowerCase().includes(searchTerm))
}

const MovieReviews = ({ reviews, searchTerm }) => {
  var filtered = filterByMovieTitle(reviews, searchTerm)
  if (filtered.length > 0) {
  return (
    <div className="review-list">
      {filtered.map(review => (
          <div key={review.headline} className="review">
            <header>
              <a className="review-link" href={review.link.url} >
                {review.headline}
              </a>
              <br/>
              <h3>{review.display_title}</h3>
              <span className="author"> reviewed by {review.byline}</span>
            </header>
            <blockquote>{review.summary_short}</blockquote>
            <p>Publication date: {review.publication_date}</p>
          </div>
        )
      )}
    </div>
  )
  }else {
    return "No reviews for this one yet!"
  }
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
