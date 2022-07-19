import React, {useState, useEffect} from 'react';
import AverageStar from './rating/AverageStar.jsx';
import RatingStat from './rating/RatingStat.jsx';
import CharRating from './rating/CharRating.jsx';

const RatingComponent = function({ratings}) {
  const [maxCount, setMaxCount] = useState(0);
  const [aveScore, setAveScore] = useState(0);
  const [starCount, setStarCount] = useState([]);

  useEffect(() => {
    let sum = 0;
    let count = 0;
    const star = [];
    let currentMax = 0;
    for (let key in ratings.ratings) {
      var ratingCount = Number(ratings.ratings[key]);
      currentMax = Math.max(ratingCount, currentMax);
      sum += ratingCount * Number(key);
      count += ratingCount;
      star.push(ratingCount);
    }
    setAveScore(sum/count);
    setMaxCount(currentMax);
    setStarCount(star);
  }, [ratings]);

  return (
    <div className = 'review review-rating'>
      <p className = 'review-rating-title'>ratings and reviews</p>
      <AverageStar aveScore = {aveScore || 0}/>
      <RatingStat starCount={starCount} maxCount = {maxCount} recommended={ratings.recommended}/>
      <CharRating char = {ratings.characteristics}/>
    </div>
  );
};

export default RatingComponent;
