import React, {useState} from 'react';
import Sorting from './Sorting.jsx';
import AllReview from './AllReview.jsx'
import AddReview from './AddReview.jsx'

var ReviewComponent = function({reviews, sortFunc}) {

  return (
    <div className = 'review review-review'>
      <h4>review</h4>
      <Sorting sortFunc = {sortFunc}/>
      <AllReview reviews = {reviews}/>
      <AddReview/>
    </div>
  )
}

export default ReviewComponent;