import React, {useState, useEffect} from 'react';

var RatingStat = function({maxCount, starCount, recommended}) {
  const [recommendRate, setRecommendRate] = useState(0)
  const [starAverage, setStarAverage] = useState([])
  useEffect(() => {
    var stars = [];
    for (var num of starCount) {
      stars.push((num/maxCount * 100).toFixed(2) + '%');
    }
    setStarAverage(stars)
  }, [starCount, recommended])
  // ((1/3) * 100).toFixed(2) + '%'
  return (

    <div className="rating-stats">
      <div>100% of reviews recommend this product</div>
      <div className='rating-stats-bar'>
        <div>5 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[0]}}/>
        </div>
      </div>
      <div className='rating-stats-bar'>
        <div>4 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[1]}}/>
        </div>
      </div>
      <div className='rating-stats-bar'>
        <div>3 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[2]}}/>
        </div>
      </div>
      <div className='rating-stats-bar'>
        <div>2 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[3]}}/>
        </div>
      </div>
      <div className='rating-stats-bar'>
        <div>1 stars</div>
        <div className = 'rating-stats-backgroundBar'>
          <div className = 'rating-stats-colorBar' style={{"width" : starAverage[4]}}/>
        </div>
      </div>


    </div>
  )
}

export default RatingStat;