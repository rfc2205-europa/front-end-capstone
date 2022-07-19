import React, {useState, useEffect} from 'react';

const AverageStar = function({aveScore}) {
  const [starList, setStarList] = useState([]);

  useEffect(() => {
    const stars = [];
    for (let i=0; i<5; i++) {
      if (i <= aveScore - 1) {
        stars.push(<span key = {i} className='rating-star'>&#9733;</span>);
      } else if (aveScore - i >= 0.25) {
        stars.push(<span key = {i} className='half-rating-star'>&#9733;</span>);
      } else {
        stars.push(<span key = {i} className='rating-star'>&#9734;</span>);
      }
    }
    setStarList(stars);
  }, [aveScore]);

  return (
    <div className='rating-score-star-container'>
      <h1 className='rating-score'>{Math.ceil(aveScore * 10) / 10}</h1>
      <div className='rating-star-container'>
        {starList}
      </div>
    </div>


  );
};

export default AverageStar;
