import React, {useState, useEffect} from 'react';
import SingleReview from './SingleReview.jsx';
import AddReview from './AddReview.jsx';

var AllReview = function({displayReview}) {
  // const [moreReview, setMoreReview] = useState(2);
  // const [displayReview, setDisplayReview] = useState(reviews.slice(0,2));

  // var clickMoreReview = function(e) {
  //   e.preventDefault();
  //   setMoreReview(moreReview + 2)
  //   setDisplayReview(reviews.slice(0,moreReview + 2))
  // }

  // useEffect(() => {
  //   if (displayReview) {
  //     setDisplayReview(reviews.slice(0,2))
  //   }
  // },[reviews])

  return (
    <div className = 'review-allReview'>
      {displayReview.map((review) => {
        return <SingleReview key = {review.review_id} review = {review}/>
      })}

    </div>
  )
}

export default AllReview;

