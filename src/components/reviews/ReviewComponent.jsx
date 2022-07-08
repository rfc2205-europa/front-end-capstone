import React, {useState} from 'react';
import Sorting from './Sorting.jsx';
import AllReview from './AllReview.jsx'
var ReviewComponent = function() {
  return (
    <div className = 'review review-review'>
      <h4>review</h4>
      <Sorting/>
      <AllReview/>
    </div>
  )
}

export default ReviewComponent;