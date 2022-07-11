import React, {useState} from 'react';
import AverageStar from './AverageStar.jsx';
import RatingStat from './RatingStat.jsx';

var RatingComponent = function({ratings}) {
  return (
    <div className = 'review review-rating d-flex p-2'>
      <h4>rating</h4>
      <AverageStar/>
      <RatingStat/>
    </div>
  )
}

export default RatingComponent;