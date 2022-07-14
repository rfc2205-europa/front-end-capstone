import React, {useState} from 'react';

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

export function Characteristics() {

  const sizeText = {1: 'A size too small', 2: '½ a size too small', 3: 'Perfect', 4: '½ a size too big', 5: 'A size too wide'};
  const widthText = {1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect', 4: 'Slightly wide', 5: 'Too wide'};
  const comfortText = {1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok', 4: 'Comfortable', 5: 'Perfect'};
  const qualityText = {1: 'Poor', 2: 'Below average', 3: 'What I expected', 4: 'Pretty great', 5: 'Perfect'};
  const lengthText = {1: 'Runs short', 2: 'Runs slightly short', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'};
  const fitText = {1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'};


  return (
    <div className='review-addReview-characteristics-container'>
      <div className='review-addReview-characteristics-text-radio'>
        <div>size: </div>
        <div className='review-addReview-characteristics-radio'>
          <input type='radio' name='Size' id='size1' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='size1' className='review-addReview-characteristics-radio-label'>1</label>
          <input type='radio' name='Size' id='size2' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='size2' className='review-addReview-characteristics-radio-label'>2</label>
          <input type='radio' name='Size' id='size3' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='size3' className='review-addReview-characteristics-radio-label'>3</label>
          <input type='radio' name='Size' id='size4' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='size4' className='review-addReview-characteristics-radio-label'>4</label>
          <input type='radio' name='Size' id='size5' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='size5' className='review-addReview-characteristics-radio-label'>5</label>
        </div>
      </div>

      <div className='review-addReview-characteristics-text-radio'>
        <div>width: </div>
        <div className='review-addReview-characteristics-radio'>
          <input type='radio' name='Width' id='width1' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='width1' className='review-addReview-characteristics-radio-label'>1</label>
          <input type='radio' name='Width' id='width2' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='width2' className='review-addReview-characteristics-radio-label'>2</label>
          <input type='radio' name='Width' id='width3' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='width3' className='review-addReview-characteristics-radio-label'>3</label>
          <input type='radio' name='Width' id='width4' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='width4' className='review-addReview-characteristics-radio-label'>4</label>
          <input type='radio' name='Width' id='width5' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='width5' className='review-addReview-characteristics-radio-label'>5</label>
        </div>
      </div>

      <div className='review-addReview-characteristics-text-radio'>
        <div>comfort: </div>
        <div className='review-addReview-characteristics-radio'>
          <input type='radio' name='Comfort' id='comfort1' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='comfort1' className='review-addReview-characteristics-radio-label'>1</label>
          <input type='radio' name='Comfort' id='comfort2' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='comfort2' className='review-addReview-characteristics-radio-label'>2</label>
          <input type='radio' name='Comfort' id='comfort3' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='comfort3' className='review-addReview-characteristics-radio-label'>3</label>
          <input type='radio' name='Comfort' id='comfort4' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='comfort4' className='review-addReview-characteristics-radio-label'>4</label>
          <input type='radio' name='Comfort' id='comfort5' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='comfort5' className='review-addReview-characteristics-radio-label'>5</label>
        </div>
      </div>


      <div className='review-addReview-characteristics-text-radio'>
        <div>quality: </div>
        <div className='review-addReview-characteristics-radio'>
          <input type='radio' name='Quality' id='quality1' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='quality1' className='review-addReview-characteristics-radio-label'>1</label>
          <input type='radio' name='Quality' id='quality2' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='quality2' className='review-addReview-characteristics-radio-label'>2</label>
          <input type='radio' name='Quality' id='quality3' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='quality3' className='review-addReview-characteristics-radio-label'>3</label>
          <input type='radio' name='Quality' id='quality4' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='quality4' className='review-addReview-characteristics-radio-label'>4</label>
          <input type='radio' name='Quality' id='quality5' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='quality5' className='review-addReview-characteristics-radio-label'>5</label>
        </div>
      </div>

      <div className='review-addReview-characteristics-text-radio'>
        <div>length: </div>
        <div className='review-addReview-characteristics-radio'>
          <input type='radio' name='Length' id='length1' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='length1' className='review-addReview-characteristics-radio-label'>1</label>
          <input type='radio' name='Length' id='length2' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='length2' className='review-addReview-characteristics-radio-label'>2</label>
          <input type='radio' name='Length' id='length3' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='length3' className='review-addReview-characteristics-radio-label'>3</label>
          <input type='radio' name='Length' id='length4' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='length4' className='review-addReview-characteristics-radio-label'>4</label>
          <input type='radio' name='Length' id='length5' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='length5' className='review-addReview-characteristics-radio-label'>5</label>
        </div>
      </div>


      <div className='review-addReview-characteristics-text-radio'>
        <div>fit: </div>
        <div className='review-addReview-characteristics-radio'>
          <input type='radio' name='Fit' id='fit1' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='fit1' className='review-addReview-characteristics-radio-label'>1</label>
          <input type='radio' name='Fit' id='fit2' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='fit2' className='review-addReview-characteristics-radio-label'>2</label>
          <input type='radio' name='Fit' id='fit3' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='fit3' className='review-addReview-characteristics-radio-label'>3</label>
          <input type='radio' name='Fit' id='fit4' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='fit4' className='review-addReview-characteristics-radio-label'>4</label>
          <input type='radio' name='Fit' id='fit5' className='review-addReview-characteristics-radio-input'/>
          <label htmlFor='fit5' className='review-addReview-characteristics-radio-label'>5</label>
        </div>
      </div>


    </div>

    )
}