import React from 'react'

const filterByMovieTitle = (reviews, searchTerm) => {
  return reviews.filter(rev => rev.display_title.toLowerCase().includes(searchTerm))
}

const MovieReviews = ({ reviews, searchTerm }) => {
  //var filtered = filterByMovieTitle(reviews, searchTerm)
  return (
    <div className="review-list">
      {reviews.map(review => (
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
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;

// const filterByName = (characters, nameFilter) => {
//   return characters.filter(c => c.name.toLowerCase().includes(nameFilter.toLowerCase()))
// }

// const CharacterList = ({ name, ministry, deathEater, characters, color }) => {
//   var filtered = filterByName(characters, name)
//   if (ministry) {
//     filtered = filtered.filter(c => c.ministryOfMagic)
//   }
//   if (deathEater) {
//     filtered = filtered.filter(c => c.deathEater)
//   }
//   const characterItems = filtered.map(c => <CharacterItem character={c} color={color} />)
//   return (<div>{characterItems}</div>)
// }




// const BookList = ({ books }) => (
//   <div className="book-list">
//     { books.map(book => <Book title={book.title} img_url={book.image_url} />) }
//   </div>
// )

//console.log(character)
// const {
//   character,
//   color
// } = props
// { color: color } is the same as { color }

//<h4 style={ { color } }>{character.name}</h4>

// const Review = ({ headline, byline, link, summary_short }) => {
//   return (
//     <div key={headline} className="review">
//       <header>
//         <a className="review-link" href={link.url} >
//           {headline}
//         </a>
//         <br/>
//         <span className="author">{byline}</span>
//       </header>
//       <blockquote>{summary_short}</blockquote>
//     </div>
//   );
// };

//const MovieReviews = ({ reviews }) => {
//   return (
//     <div className="review-list">{reviews.map(Review)}</div>;
//   )
// }
