import React, {useState} from 'react';
import axios from 'axios';
const config = require('../../../../config.js');


export function Star({setFunc, chars}) {
  const [hover, setHover] = useState(null);
  const ratingText = {1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'};

  const clickStar = function(ratingValue) {
    setFunc({...chars, ['rating']: ratingValue});
  };

  const starStyle = function(ratingValue) {
    if (ratingValue <= chars.rating || ratingValue <= hover) {
      return <div onMouseOver={()=>{setHover(ratingValue)}} onMouseOut={()=>{setHover(null)}} className='review-addReview-star-full'>&#9733;</div>
    } else {
      console.log('reach here')
      return <div onMouseOver={()=>{setHover(ratingValue)}} onMouseOut={()=>{setHover(null)}} className='review-addReview-star-empty'>&#9733;</div>
    }
  }

  return (
    <div className='review-addReview-star-container'>
      <div className='review-addReview-subtitle'>Overal Rating<span style={{ color: 'red' }}>*</span>: </div>
      <div className='review-addReview-star-popup-container'>
        <div className='review-addReview-star'>
          {[...Array(5)].map((star,i) => {
            const ratingValue = i+1;
            return (
              <label key={i}>
                <input className='starRatingRadio' type='radio' name='rating' value={ratingValue} onClick={() => {clickStar(ratingValue);}}
                />
                {starStyle(ratingValue)}
              </label>
            );
          })}
        </div>
        <div className='review-addReview-popUpText'>{chars.rating && ratingText[chars.rating]}</div>
      </div>
    </div>
  );
}

export function Recommend({setFunc, chars}) {
  return (
    <div className='review-addReview-recommend-container'>
      <label className='review-addReview-radio'>
        <input type='radio' defaultChecked='checked' name='recommend' onClick={()=>{setFunc({...chars, ['recommend']: true})}} className='review-addReview-radio-input' value='true'/>
        <div className='review-addReview-radio-radio'></div>
        <div className='review-addReview-radio-text'>I recommend this product</div>
      </label>
      <label className='review-addReview-radio'>
        <input type='radio' name='recommend' onClick={()=>{setFunc({...chars, ['recommend']: false})}} className='review-addReview-radio-input' value='false'/>
        <div className='review-addReview-radio-radio'></div>
        <div className='review-addReview-radio-text'>I don't recommend this product</div>
      </label>
    </div>
  );
}

const SingleCharacteristics = function({ charName, charId, setFunc, chars }) {
  const [rating, setRating] = useState(null)
  const [ratingText, setRatingText] = useState(null)
  const text = {Size: {1: 'A size too small', 2: '½ a size too small', 3: 'Perfect', 4: '½ a size too big', 5: 'A size too wide'},
  Width: {1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect', 4: 'Slightly wide', 5: 'Too wide'},
  Comfort: {1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok', 4: 'Comfortable', 5: 'Perfect'},
  Quality: {1: 'Poor', 2: 'Below average', 3: 'What I expected', 4: 'Pretty great', 5: 'Perfect'},
  Length: {1: 'Runs short', 2: 'Runs slightly short', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'},
  Fit: {1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'}};

  const clickChar = function(e) {
    setRating(e.target.id[e.target.id.length-1])
    setRatingText(text[charName][e.target.id[e.target.id.length-1]])
    if (chars['characteristics'][charId]) {
      setFunc({...chars, ['characteristics']:{...chars['characteristics'], [chars['characteristics'][charId]]: Number(e.target.id[e.target.id.length-1])}})
    } else {
      setFunc({...chars, ['characteristics']:{...chars['characteristics'], [charId]: Number(e.target.id[e.target.id.length-1])}})
    }

  }

  return (
    <div className='review-addReview-characteristics-text-radio-container'>
      <div className='review-addReview-characteristics-text-radio'>
        <div>{charName}: </div>
        <div className='review-addReview-characteristics-radio'>
          <input type='radio' name={charName} id={charName + '1'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
          <label htmlFor={charName + '1'} className='review-addReview-characteristics-radio-label'>1</label>
          {/* <div className='review-addReview-popUpText'>{rating && ratingText}</div> */}
          <input type='radio' name={charName} id={charName + '2'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
          <label htmlFor={charName + '2'} className='review-addReview-characteristics-radio-label'>2</label>
          <input type='radio' name={charName} id={charName + '3'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
          <label htmlFor={charName + '3'} className='review-addReview-characteristics-radio-label'>3</label>
          <input type='radio' name={charName} id={charName + '4'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
          <label htmlFor={charName + '4'} className='review-addReview-characteristics-radio-label'>4</label>
          <input type='radio' name={charName} id={charName + '5'} className='review-addReview-characteristics-radio-input' onClick={clickChar}/>
          <label htmlFor={charName + '5'} className='review-addReview-characteristics-radio-label'>5</label>
        </div>
      </div>
      {console.log(rating, ratingText)}
      {rating === '1' && <div className='review-addReview-popUpText' style={{marginLeft: '19%'}}>{ratingText}</div>}
      {rating === '2' && <div className='review-addReview-popUpText' style={{marginLeft: '36%'}}>{ratingText}</div>}
      {rating === '3' && <div className='review-addReview-popUpText' style={{marginLeft: '53%'}}>{ratingText}</div>}
      {rating === '4' && <div className='review-addReview-popUpText' style={{marginLeft: '70%'}}>{ratingText}</div>}
      {rating === '5' && <div className='review-addReview-popUpText' style={{marginLeft: '87%'}}>{ratingText}</div>}

    </div>
  )

}

export function Characteristics({ needChar,setFunc, chars }) {

  return (
    <div className='review-addReview-characteristics-container'>
      <div className='review-addReview-subtitle'>Characteristics Breakdown<span style={{ color: 'red' }}>*</span>: </div>
      <div className='review-addReview-characteristics-radio-container'>
        {Object.keys(needChar).map((charName) => {return <SingleCharacteristics key={charName} charName={charName} charId={needChar[charName].id} setFunc = {setFunc} chars={chars}/>})}
      </div>

    </div>

    );
}

export function Summary({setFunc, chars}) {
  return (
    <div className='review-addReview-summary-container'>
      <div className='review-addReview-summary'>
        <input className='review-addReview-input' type='text' required onChange={(e) => setFunc({...chars, summary: e.target.value})}/>
        <label className='review-addReview-label'>Review Summary: [Example: Best purchase ever!]</label>
        <div className='review-addReview-underline'></div>
        {chars.summary.length >= 60 && <div className='review-addReview-redText'>Maximum word limit meets</div>}
      </div>
    </div>
  )
}

export function ReviewBody({setFunc, chars}) {
  return (
    <div className='review-addReview-summary-container'>
      <div className='review-addReview-summary'>
        <input className='review-addReview-input' type='text' required onChange={(e)=> {setFunc({...chars, body: e.target.value})}}/>
        <label className='review-addReview-label'>Review Body: [Why did you like the product or not]</label>
        <div className='review-addReview-underline'></div>
        {chars.body.length >= 50 && <div className='review-addReview-blackText'>Minimum reached</div>}
        {chars.body.length >= 1 && chars.body.length < 50 && <div className='review-addReview-redText'>Minimum required characters left: {(50-chars.body.length).toString()}</div>}
      </div>
    </div>
  );
}

export function Photo({setFunc, chars}) {
  const [photo, setPhoto] = useState(null);
  // const [photo, setPhoto] = useState(null);

  const setPhotoFunc = function(e) {
    console.log(e.target.files[0]);
    setPhoto(e.target.files[0]);
  };

  const upload = function(e) {
    e.preventDefault();
    const photoData = new FormData();
    photoData.append('file', photo);
    photoData.append('upload_preset', config.uploadToken);
    console.log(photoData);
    axios.post('https://api.cloudinary.com/v1_1/dhst87v9a/image/upload', photoData)
        .then((res) => {
          console.log(res);
          setFunc({...chars, photos:[...chars['photos'], `https://res.cloudinary.com/dhst87v9a/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1657832797/${res.data.public_id}.jpg`]});
        });
  };

  return (
    <div className='review-addReview-photo-container'>
      <div className='review-addReview-subtitle'>Upload Photo:</div>
      <label htmlFor="formFile" className="review-addReview-photo-button">
        <input type='file' onChange={setPhotoFunc} className="form-control" id="formFile"></input>
        {chars.photos.length < 5 && <button onClick={upload} className='review-addReview-button'>upload</button>}
      </label>
      <div className='thumbnail-container'>
        {chars.photos.length > 0 && chars.photos.map((photoURL) => {
          return <img key={photoURL} className = 'thumbnail' src={photoURL}/>
        })}
      </div>
    </div>
  );
}


export function NickName({setFunc, chars}) {
  return (
    <div className='review-addReview-summary-container'>
      <div className='review-addReview-summary'>
        <input className='review-addReview-input' type='text' required onChange={(e)=>{setFunc({...chars, name: e.target.value})}}/>
        <label className='review-addReview-label'>NickName: [jackson11!]</label>
        <div className='review-addReview-underline'></div>
        {chars.summary.length >= 60 ? <div className='review-addReview-redText'>Maximum word limit meets</div>:null}
      </div>
    </div>
  );
}

export function Email({setFunc, chars}) {
  return (
    <div className='review-addReview-summary-container'>
      <div className='review-addReview-summary'>
        <input className='review-addReview-input' type='text' required onChange={(e)=>{setFunc({...chars, email: e.target.value})}}/>
        <label className='review-addReview-label'>Email: [jac11@email.com]</label>
        <div className='review-addReview-underline'></div>
        {chars.summary.length >= 60 ? <div className='review-addReview-redText'>Maximum word limit meets</div>:null}
      </div>
    </div>
  );
};
