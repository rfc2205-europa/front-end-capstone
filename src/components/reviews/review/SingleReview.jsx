import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';

const service = axios.create({
  baseURL: 'http://127.0.0.1:3005',
  changeOrigin: true,
});

const ModalView = function({src, clickFunc}) {
  return ReactDom.createPortal(
      <>
        <div className='modalView'/>
        <div className='modal-content'>
          <span className="close" onClick = {clickFunc}>&times;</span>
          <img src = {src} className = 'largeImage'></img>
        </div>
      </>,
      document.getElementById('portal')
  );
};

const SingleReview = function({review}) {
  const [showMore, setShowMore] = useState(false);
  const [displayReview, setDisplayReview] = useState({reviewer_name: '', date: '', summary: '', body: '', helpfulness: '', photos: []});
  const [modelLink, setModelLink] = useState('');
  const [vote, setVote] = useState(review.helpfulness);
  const [whetherVote, setWhetherVote] = useState(false);
  const [report, setReport] = useState('Report');
  const [openModal, setOpenModal] = useState(false);
  const [stars, setStars] = useState([]);

  const handleVote = function(e) {
    e.preventDefault();
    const body = {type: 'review', api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${e.target.id}/helpful`};
    service.put('/', body)
        .then((res) => {
          console.log(res);
          setVote(vote + 1);
          setWhetherVote(true);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const handleReport = function(e) {
    e.preventDefault();
    const body = {type: 'review', api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${e.target.id}/report`};
    service.put('/', body)
        .then((res) => {
          console.log(res);
          setReport('Reported');
        })
        .catch((err) => {
          console.log(err);
        });
  };
  const showMoreClick = function(e) {
    e.preventDefault();
    const newReview = displayReview;
    newReview.summary = review.summary;
    newReview.body = review.body;
    setDisplayReview(newReview);
    setShowMore(false);
  };

  const firstDisplayFormat = function(review) {
    const formatReview = {};
    formatReview.body = '';
    if (review.summary.length > 60) {
      formatReview.summary = review.summary.slice(0, 60);
      formatReview.summary += '...';
      formatReview.body = '...';
      formatReview.body += review.summary.slice(60, review.summary.length);
      formatReview.body += '<br/>';
    } else {
      formatReview.summary = review.summary;
    }
    if (review.body.length > 250) {
      setShowMore(true);
      formatReview.body += review.body.slice(0, 250);
    } else {
      formatReview.body += review.body;
    }
    formatReview.date = review.date.slice(0, 10);
    formatReview.reviewer_name = review.reviewer_name;
    formatReview.helpfulness = review.helpfulness;
    formatReview.photos = review.photos;
    formatReview.response = review.response;
    formatReview.recommend = review.recommend;
    formatReview.rating = review.rating;
    return formatReview;
  };

  const handleThumbnailClick = function(e) {
    e.preventDefault();
    console.log(e.target.src);
    setOpenModal(!openModal);
    // modelFunc();
    if (modelLink) {
      setModelLink('');
    } else {
      setModelLink(e.target.src);
    }
  };

  useEffect(() => {
    const formatReview = firstDisplayFormat(review);
    setDisplayReview(formatReview);
    setVote(review.helpfulness);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i <= formatReview.rating - 1) {
        stars.push(<span key={i} className='single-rating-star-full'>&#9733;</span>);
      } else {
        stars.push(<span key={i} className='single-rating-star-empty'>&#9733;</span>);
      }
    }
    setStars(stars);
  }, []);

  return (
    <div className = 'review-singleReview'>
      <div className='single-rating-reviewer-container'>
        <span className='single-rating'>
          {stars}
        </span>
        <span className='single-reviewer'>{displayReview.reviewer_name}, {displayReview.date}</span>
      </div>
      <div className='single-title'>{displayReview.summary}</div>
      <p style={{whiteSpace: 'pre-line'}}>{displayReview.body.split('<br/>').join('\n')}</p>
      {showMore && (
        <div className='single-showMore-container'>
          <div className='single-showMore-triangle'/>
          <div className = 'single-showMore' onClick = {showMoreClick}>More</div>
        </div>
      )}


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
  );
};

export default SingleReview;
