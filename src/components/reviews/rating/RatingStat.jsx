import React, {useState, useEffect} from 'react';

const RatingStat = function({maxCount, starCount, recommended}) {
  const [recommendRate, setRecommendRate] = useState('100%');
  const [starAverage, setStarAverage] = useState([]);

  useEffect(() => {
    const stars = [];
    for (const num of starCount) {
      stars.push((num/maxCount * 100).toFixed(2) + '%');
    }
    setStarAverage(stars);
    if (recommended) {
      setRecommendRate((Number(recommended[true])/(Number(recommended[true])+Number(recommended[false]))*100).toFixed(2) + '%');
    };
  }, [starCount, recommended]);

  // ((1/3) * 100).toFixed(2) + '%'
  return (

    <div className="rating-stats">
      <div className='rating-recommendRating-text'>{recommendRate} of reviews recommend this product</div>
      <div className='rating-stats-bar'>
        <div className='rating-stats-bar-starText'>5 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[0]}}/>
        </div>
        <div className='rating-stats-bar-countText'>{starCount[0]}</div>
      </div>
      <div className='rating-stats-bar'>
        <div className='rating-stats-bar-starText'>4 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[1]}}/>
        </div>
        <div className='rating-stats-bar-countText'>{starCount[1]}</div>
      </div>
      <div className='rating-stats-bar'>
        <div className='rating-stats-bar-starText'>3 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[2]}}/>
        </div>
        <div className='rating-stats-bar-countText'>{starCount[2]}</div>
      </div>
      <div className='rating-stats-bar'>
        <div className='rating-stats-bar-starText'>2 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[3]}}/>
        </div>
        <div className='rating-stats-bar-countText'>{starCount[3]}</div>
      </div>
      <div className='rating-stats-bar'>
        <div className='rating-stats-bar-starText'>1 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[4]}}/>
        </div>
        <div className='rating-stats-bar-countText'>{starCount[4]}</div>
      </div>


    </div>
  );
};

export default RatingStat;
