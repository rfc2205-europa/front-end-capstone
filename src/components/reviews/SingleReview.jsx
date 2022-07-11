import React, {useState, useEffect} from 'react';

var SingleReview = function({review}) {
  const [showMore, setShowMore] = useState(false);
  const [displayReview, setDisplayReview] = useState({reviewer_name:'',date:'',summary:'',body:'', helpfulness:''})

  var showMoreClick = function(e) {
    e.preventDefault();
    var newReview = displayReview;
    newReview.summary = review.summary;
    newReview.body = review.body;
    setDisplayReview(newReview);
    setShowMore(false)
  }

  var firstDisplayFormat = function(review) {
    var formatReview = {};
    formatReview.body = ''
    if (review.summary.length > 20) {
      formatReview.summary = review.summary.slice(0,60);
      formatReview.summary += '...'
      formatReview.body = '...'
      formatReview.body += review.summary.slice(60)
      formatReview.body += '<br/>'
    } else {
      formatReview.summary = review.summary
    }
    if (review.body.length > 250) {
      setShowMore(true);
      formatReview.body += review.body.slice(0,250);
    } else {
      formatReview.body += review.body;
    }
    formatReview.date = review.date.slice(0,10);
    formatReview.reviewer_name = review.reviewer_name;
    formatReview.helpfulness = review.helpfulness;
    return formatReview;
  }

  useEffect(() => {
    setDisplayReview(firstDisplayFormat(review))
  },[])

  return (
    <div className = 'review-singleReview'>
      <span><sup>⭐️⭐️⭐️</sup></span>
      <span>{displayReview.reviewer_name}, {displayReview.date}</span>
      <div>{displayReview.summary}</div>
      <p style={{ whiteSpace: "pre-line" }}>{displayReview.body.split("<br/>").join("\n")}</p>
      <img></img>
      {showMore? <div onClick = {showMoreClick}>Show More</div>:null}
      <span>Helpful? Yes({displayReview.helpfulness})  |  </span>
      <span>report</span>
    </div>
  )
}

export default SingleReview;