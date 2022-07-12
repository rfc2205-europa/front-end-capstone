import React, {useState, useEffect} from 'react';
import Sorting from './Sorting.jsx';
import AllReview from './AllReview.jsx';
import AddReview from './AddReview.jsx';
import SearchBar from './SearchBar.jsx';

var ReviewComponent = function({reviews, sortFunc, modelFunc}) {

  const [moreReview, setMoreReview] = useState(2);
  const [displayReview, setDisplayReview] = useState(reviews.slice(0,2));

  var clickMoreReview = function(e) {
    e.preventDefault();
    setMoreReview(moreReview + 2)
    setDisplayReview(reviews.slice(0,moreReview + 2))
  }

  useEffect(() => {
    if (displayReview) {
      setDisplayReview(reviews.slice(0,2))
    }
  },[reviews])

  return (
    <div className = 'review review-review'>
      <div className='review-summary-container'>
        <Sorting num = {reviews.length} sortFunc = {sortFunc}/>
        <SearchBar/>
      </div>
      <AllReview displayReview = {displayReview} modelFunc = {modelFunc}/>
      <div className='btn-container'>
        <button className="btn btn-moreRevew" onClick = {clickMoreReview}>More Review</button>
        <AddReview/>
      </div>
    </div>
  )
}

export default ReviewComponent;