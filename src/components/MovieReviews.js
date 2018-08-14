// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => {
  let revs = reviews.map((rev) =>{return <div className='review'>
  <p>{rev.summary_short}</p>
  </div>})

  return (
    <div className='review-list'>
    {revs}
    </div>
  )
}

export default MovieReviews
