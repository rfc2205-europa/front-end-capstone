import React, {useState, useEffect} from 'react';
import axios from 'axios';

const service = axios.create({
  baseURL: 'http://127.0.0.1:3005',
  changeOrigin: true,
})

var ModalView = function({src, clickFunc}) {

  return (
  <div className='modal-content'>
    <span className="close" onClick = {clickFunc}>&times;</span>
    <img src = {src} className = 'largeImage'></img>
  </div>
  )
}

var SingleReview = function({review, modelFunc}) {
  const [showMore, setShowMore] = useState(false);
  const [displayReview, setDisplayReview] = useState({reviewer_name:'',date:'',summary:'',body:'', helpfulness:'', photos: []})
  const [modelLink, setModelLink] = useState('')
  const [vote, setVote] = useState(review.helpfulness);
  const [whetherVote, setWhetherVote] = useState(false);
  const [report, setReport] = useState('Report');

  var handleVote = function(e) {
    e.preventDefault();
    var body = {type: 'review', api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${e.target.id}/helpful`}
    console.log(body)
    service.put('/', body)
      .then((res) => {
        console.log(res)
        setVote(vote + 1)
        setWhetherVote(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  var handleReport = function(e) {
    e.preventDefault();
    var body = {type: 'review', api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${e.target.id}/report`}
    console.log(body)
    service.put('/', body)
      .then((res) => {
        console.log(res)
        setReport('Reported')
      })
      .catch((err) => {
        console.log(err)
      })
  }
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
    if (review.summary.length > 60) {
      console.log(review.summary.length, review.summary)
      formatReview.summary = review.summary.slice(0,60);
      formatReview.summary += '...'
      formatReview.body = '...'
      formatReview.body += review.summary.slice(60, review.summary.length)
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
    formatReview.photos = review.photos;
    formatReview.response = review.response;
    formatReview.recommend = review.recommend;
    return formatReview;
  }

  var handleThumbnailClick = function(e) {
    e.preventDefault();
    console.log(e.target.src)
    modelFunc();
    if (modelLink) {
      setModelLink('')
    } else {
      setModelLink(e.target.src)
    }
  }

  useEffect(() => {
    setDisplayReview(firstDisplayFormat(review))
    setVote(review.helpfulness)
  },[])

  return (
    <div className = 'review-singleReview'>
      <div className='single-rating-reviewer-container'>
        <span className='single-rating'><sup>⭐️⭐️⭐️</sup></span>
        <span className='single-reviewer'>{displayReview.reviewer_name}, {displayReview.date}</span>
      </div>
      <div className='single-title'>{displayReview.summary}</div>
      <p style={{ whiteSpace: "pre-line" }}>{displayReview.body.split("<br/>").join("\n")}</p>
      {showMore? <div className = 'single-showMore' onClick = {showMoreClick}>Show More</div>:null}
      <div className = 'thumbnail-container'>
        {displayReview.photos.map((photo) => {
          return <img src = {photo.url} onClick = {handleThumbnailClick} key = {photo.id} className = 'thumbnail'/>})}
      </div>
      {modelLink && <ModalView src = {modelLink} clickFunc = {handleThumbnailClick}/>}
      {displayReview.recommend && <p className = 'single-recommend'> &#10004; I recommend this product</p>}
      <div className='single-response'>
          <p>{displayReview.response}</p>
      </div>
      <span>Helpful? </span>
      <span onClick={whetherVote? null:handleVote} style={whetherVote? {fontWeight: 'bold'}:null} value='yes' id={review.review_id}>Yes({vote})  |  </span>
      <span id={review.review_id} onClick={handleReport} style={report === 'Reported'? {fontWeight: 'bold'}:null}>{report}</span>
      <div className='review-singleReview-divider-container'>
        <span className = 'review-singleReview-divider'></span>
      </div>
    </div>
  )
}

export default SingleReview;