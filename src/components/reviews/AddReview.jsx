import React, {useState} from 'react';
import ReactDom from 'react-dom';
var Star = function() {
  const [ratingStar, setRatingStar] = useState(null);
  const [hover, setHover] = useState(null);

  var clickStar = function(ratingValue) {
    setRatingStar(ratingValue)
  }

  var starStyle = function(ratingValue) {
    console.log('hover is ', hover)
    if (ratingValue <= ratingStar || ratingValue <= hover) {
      return <div>&#9733;</div>
    } else {
      return <div>&#9734;</div>

    }
  }

  return (
    <div>
      {[...Array(5)].map((star,i) => {
        const ratingValue = i+1;
        return (
          <label key={i}>
            <input className='starRatingRadio' type='radio' name='rating' value={ratingValue} onClick={() => {clickStar(ratingValue);}}
            />
            {starStyle(ratingValue)}
        </label>
        )
      })}
    </div>
  )
}
var ModalView = function({clickFunc}) {

  return ReactDom.createPortal(
  <>
    <div className='modalView'/>
    <div className='modal-content'>
      <span className="close" onClick = {() => {clickFunc(false)}}>&times;</span>
      <div className='review-addReview'>
        <p>Write Your Review</p>
        <p>Overall Rating: </p>
        <Star/>
      </div>
    </div>
  </>,
  document.getElementById('portal')
  )
}

var AddReview = function() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button className="btn btn-moreRevew" onClick={() => {setModal(true)}}>Add Review</button>
      {modal && <ModalView clickFunc={setModal}/>}
    </>


  )
}

export default AddReview;