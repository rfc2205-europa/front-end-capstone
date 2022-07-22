import React, {useState, useEffect} from 'react';
import Sorting from './review/Sorting.jsx';
import AllReview from './review/AllReview.jsx';
import AddReview from './review/AddReview.jsx';
import SearchBar from './review/SearchBar.jsx';

const ReviewComponent = function({reviews, sortFunc, product_id, needChar}) {
  const [moreReview, setMoreReview] = useState(2);
  const [displayReview, setDisplayReview] = useState(reviews.slice(0, 2));
  const [search, setSearch] = useState('')

  const clickMoreReview = function(e) {
    e.preventDefault();
    setMoreReview(moreReview + 2);
    setDisplayReview(reviews.slice(0, moreReview + 2));
  };

  useEffect(() => {
    if (displayReview) {
      setDisplayReview(reviews.slice(0, 2));
    }
  }, [reviews]);

  return (
    <div className = 'review review-review' id='review'>
      <div className='review-summary-container'>
        <Sorting num = {reviews.length} sortFunc = {sortFunc}/>
        <SearchBar setDisplayReview = {setDisplayReview} allReviews = {reviews} setSearch={setSearch}/>
      </div>
      <AllReview displayReview = {displayReview} search={search}/>
      <div className='btn-container'>
        <button className="review-btn" onClick = {clickMoreReview}>More Review</button>
        <AddReview product_id={product_id} needChar={needChar}/>
      </div>
    </div>
  );
};

export default ReviewComponent;
