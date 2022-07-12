import React, {useState} from 'react';

var AverageStar = function() {


  return (
    <div>
      <div className='rating-score-star-container'>
        <h1 className='rating-score'>3.3</h1>
        <div className='rating-star-container'>
          <span className='rating-star'>&#9733;</span>
          <span className='rating-star'>&#9733;</span>
          <span className='rating-star'>&#9733;</span>
          <span className='half-rating-star'>&#9733;</span>
          <span className='rating-star'>&#9734;</span>
        </div>

      </div>

    </div>
  )
}

export default AverageStar;