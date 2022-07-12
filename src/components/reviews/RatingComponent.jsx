import React, {useState} from 'react';
import AverageStar from './AverageStar.jsx';
import RatingStat from './RatingStat.jsx';

var RatingComponent = function({ratings}) {
  return (
    <div className = 'review review-rating'>
      <p className = 'review-rating-title'>ratings and reviews</p>
      <AverageStar/>
      <RatingStat/>
    </div>
  )
}

export default RatingComponent;