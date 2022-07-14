import React, {useState} from 'react';
import axios from 'axios';
const config = require('../../../../config.js');


export function Star() {
  const [ratingStar, setRatingStar] = useState(null);
  const [hover, setHover] = useState(null);
  const ratingText = {1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'};

  var clickStar = function(ratingValue) {
    setRatingStar(ratingValue)
  }

  var starStyle = function(ratingValue) {
    if (ratingValue <= ratingStar || ratingValue <= hover) {
      return <div onMouseOver={()=>{setHover(ratingValue)}} onMouseOut={()=>{setHover(null)}}>&#9733;</div>
    } else {
      return <div onMouseOver={()=>{setHover(ratingValue)}} onMouseOut={()=>{setHover(null)}}>&#9734;</div>
    }
  }

  return (
    <div className='review-addReview-star-container'>
      <p className='review-addReview-star'>Overal Rating: </p>
      <div className='review-addReview-star'>
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
      <p>{ratingStar && ratingText[ratingStar]}</p>
    </div>
  )
}

export function Recommend() {
  const [recommended, setRecommended] = useState(true);

  return (
    <div className='review-addReview-recommend-container'>
      <label className='review-addReview-radio'>
        <input type='radio' defaultChecked='checked' name='recommend' className='review-addReview-radio-input' value='true'/>
        <div className='review-addReview-radio-radio'></div>
        I recommend this product
      </label>
      <label className='review-addReview-radio'>
        <input type='radio' name='recommend' className='review-addReview-radio-input' value='false'/>
        <div className='review-addReview-radio-radio'></div>
        I don't recommend this product
      </label>
    </div>
    )
}

var SingleCharacteristics = function({charName}) {
  const [rating, setRating] = useState(null)
  const [ratingText, setRatingText] = useState(null)
  const text = {size: {1: 'A size too small', 2: '½ a size too small', 3: 'Perfect', 4: '½ a size too big', 5: 'A size too wide'},
  width: {1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect', 4: 'Slightly wide', 5: 'Too wide'},
  comfort: {1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok', 4: 'Comfortable', 5: 'Perfect'},
  quality: {1: 'Poor', 2: 'Below average', 3: 'What I expected', 4: 'Pretty great', 5: 'Perfect'},
  length: {1: 'Runs short', 2: 'Runs slightly short', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'},
  fit: {1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'}};

  var clickChar = function(e) {
    setRating(e.target.id[e.target.id.length-1])
    setRatingText(text[charName][e.target.id[e.target.id.length-1]])
  }

  return (
    <div className='review-addReview-characteristics-text-radio'>
      <div>{charName}: </div>
      <div className='review-addReview-characteristics-radio'>
        <input type='radio' name={charName} id={charName + '1'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
        <label htmlFor={charName + '1'} className='review-addReview-characteristics-radio-label'>1</label>
        <input type='radio' name={charName} id={charName + '2'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
        <label htmlFor={charName + '2'} className='review-addReview-characteristics-radio-label'>2</label>
        <input type='radio' name={charName} id={charName + '3'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
        <label htmlFor={charName + '3'} className='review-addReview-characteristics-radio-label'>3</label>
        <input type='radio' name={charName} id={charName + '4'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
        <label htmlFor={charName + '4'} className='review-addReview-characteristics-radio-label'>4</label>
        <input type='radio' name={charName} id={charName + '5'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
        <label htmlFor={charName + '5'} className='review-addReview-characteristics-radio-label'>5</label>
      </div>
      <p>{ratingText && ratingText}</p>
    </div>
  )

}

export function Characteristics() {
  const charNames = ['size','width', 'comfort', 'quality', 'length', 'fit']

  return (
    <div className='review-addReview-characteristics-container'>
      {charNames.map((charName) => {return <SingleCharacteristics key={charName} charName={charName}/>})}
    </div>

    )
}

export function Summary() {
  const [text, setText] = useState('')
  return (
    <div className='review-addReview-summary-container'>
      <div>Review Summary:</div>
      <input type='text' placeholder='Example: Best purchase ever!'/>
    </div>
  )

}

export function ReviewBody() {
  const [text, setText] = useState('')


  return (
    <div className='review-addReview-body-container'>
      <div>Review Body:</div>
      <div className='review-addReview-body-minimumText'>
        <input type='textarea' value={text} placeholder='Why did you like the product or not?' onChange={(e)=>{setText(e.target.value)}}/>
        <div>{text.length >= 50? 'Minimum reached': 'Minimum required characters left: ' + (50-text.length).toString()}</div>
      </div>

    </div>
  )

}

export function Photo() {
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  var setPhotoFunc = function(e) {
    console.log(e.target.files[0])
    setPhoto(e.target.files[0])
  }

  var upload = function(e) {
    e.preventDefault();
    var photoData = new FormData();
    photoData.append('file', photo)
    photoData.append('upload_preset', config.uploadToken)
    console.log(photoData);
    axios.post('https://api.cloudinary.com/v1_1/dhst87v9a/image/upload', photoData)
      .then((res) => {
        setPhotoURL(`https://res.cloudinary.com/dhst87v9a/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1657832797/${res.data.public_id}.jpg`)
        // console.log(res.data.public_id);
      })

  }

  return (
    <div className='review-addReview-photo-container'>
      <div>Upload photo:</div>
      <input type='file' onChange={setPhotoFunc}></input>
      <button onClick={upload}>upload</button>
    </div>
  )
}


export function NickName() {
  const [nickname, setNickname] = useState(null)
  return (
    <div className='review-addReview-nickName-container'>
      <div>Nickname:</div>
      <div>
        <input type='text' placeholer='Example: jackson11!' onChange={(e)=>{setNickname(e.target.value)}}></input>
        <p>For privacy reasons, do not use your full name or email address</p>
      </div>
    </div>
  )
}

export function Email() {
  const [email, setEmail] = useState(null)
  return (
    <div className='review-addReview-email-container'>
      <div>Email:</div>
      <div>
        <input type='email' placeholer='Example: jackson11@email.com' onChange={(e)=>{setEmail(e.target.value)}}></input>
        <p>For authentication reasons, you will not be emailed</p>
      </div>
    </div>
  )
}