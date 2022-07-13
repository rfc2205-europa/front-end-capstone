import React, {useState, useEffect} from 'react';

var AverageStar = function({aveScore}) {
  const [starList, setStarList] = useState([])

  useEffect(() => {
    var stars = [];
    for (var i=0; i<5; i++) {
      if (i <= aveScore - 1) {
        stars.push(<span key = {i} className='rating-star'>&#9733;</span>)
      } else if (aveScore - i >= 0.3) {
        stars.push(<span key = {i} className='half-rating-star'>&#9733;</span>)
      } else {
        stars.push(<span key = {i} className='rating-star'>&#9734;</span>)
      }
    }
    setStarList(stars);
  }, [aveScore])

  return (
    <div className='rating-score-star-container'>
      <h1 className='rating-score'>{aveScore.toString().slice(0,3)}</h1>
      <div className='rating-star-container'>
        {starList}
      </div>
    </div>


  )
}

export default AverageStar;