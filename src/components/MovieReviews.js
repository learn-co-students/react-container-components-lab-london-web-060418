import React from 'react'

const MovieReviews = ({ reviews }) => {
  const renderReviews = reviews.map( review => {
    return (
      <div className="review">
        <h4>{review.headline}</h4>
        <h5>{review.display_title}</h5>
      </div>
    )
  } )
  return (
    <div className="review-list" >
      {renderReviews}
    </div>
  )
}

export default MovieReviews
