import React, {useState, useEffect} from 'react';
import AverageStar from './AverageStar.jsx';
import RatingStat from './RatingStat.jsx';
import CharRating from './CharRating.jsx'

var RatingComponent = function({ratings}) {
  const [maxCount, setMaxCount] = useState(0);
  const [aveScore, setAveScore] = useState(0);
  const [starCount, setStarCount] = useState([]);

  useEffect(() => {
    var sum = 0;
    var count = 0;
    var star = [];
    var currentMax = 0;
    for (var key in ratings.ratings) {
      var ratingCount = Number(ratings.ratings[key])
      currentMax = Math.max(ratingCount, currentMax)
      sum += ratingCount * Number(key)
      count += ratingCount
      star.push(ratingCount)
    }
    setAveScore(sum/count);
    setMaxCount(currentMax);
    setStarCount(star);

  }, [ratings])

  return (
    <div className = 'review review-rating'>
      <p className = 'review-rating-title'>ratings and reviews</p>
      <AverageStar aveScore = {aveScore || 0}/>
      <RatingStat starCount={starCount} maxCount = {maxCount} recommended={ratings.recommended}/>
      <CharRating char = {ratings.characteristics}/>
    </div>
  )
}

export default RatingComponent;