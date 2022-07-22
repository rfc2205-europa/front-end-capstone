import React, {useState, useEffect} from 'react';
import SingleReview from './SingleReview.jsx';
// import AddReview from './AddReview.jsx';

const AllReview = function({displayReview, search}) {
  return (
    <div className = 'review-allReview'>
      {console.log('from search component:',search)}
      {displayReview.map((review) => {
        return <SingleReview key = {review.review_id} review = {review} search={search}/>;
      })}

    </div>
  );
};

export default AllReview;

