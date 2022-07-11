import React, {useState, useEffect} from 'react';
import SingleReview from './SingleReview.jsx';

var AllReview = function({reviews}) {
  const [moreReview, setMoreReview] = useState(2);
  const [displayReview, setDisplayReview] = useState(reviews.slice(0,2));

  var clickMoreReview = function(e) {
    e.preventDefault();
    setMoreReview(moreReview + 2)
    setDisplayReview(reviews.slice(0,moreReview + 2))
  }

  useEffect(() => {
    if (displayReview) {
      setDisplayReview(reviews.slice(0,2))
    }
  },[reviews])

  return (
    <div className = 'review-allReview'>
      {console.log('check!',reviews, displayReview)}
      {displayReview.map((review) => {
        return <SingleReview key = {review.review_id} review = {review}/>
      })}
      <div className = 'btn btn-moreRevew'>
        <button className="btn btn-light" onClick = {clickMoreReview}>More Review</button>
      </div>
    </div>
  )
}

export default AllReview;

