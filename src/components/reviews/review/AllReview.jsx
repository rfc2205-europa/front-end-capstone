import React, {useState, useEffect} from 'react';
import SingleReview from './SingleReview.jsx';
// import AddReview from './AddReview.jsx';

const AllReview = function({displayReview}) {
  return (
    <div className = 'review-allReview'>
      {displayReview.map((review) => {
        return <SingleReview key = {review.review_id} review = {review}/>;
      })}

    </div>
  );
};

export default AllReview;

