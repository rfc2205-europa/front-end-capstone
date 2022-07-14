import React, {useState, useEffect} from 'react';

var SingleCharRating = function({charName, charScore}) {
  const [score, setScore] = useState('46%')
  useEffect(()=>{
    setScore((Number(charScore.value)/5 * 0.96 * 100).toFixed(2) + '%')
  },[charScore])
  return (
    <div>
      <div>{charName}</div>
      <div className='rating-char-line-triangle-container'>
        <div className='rating-char-line-container'>
          <div className='rating-char-line'/>
          <div className='rating-char-line'/>
          <div className='rating-char-line'/>
          <div className='rating-char-line'/>
          <div className='rating-char-line'/>
        </div>
        <div className='rating-char-triangle' style = {{'marginLeft': score}}/>
      </div>


    </div>


  )
}

var CharRating = function({char}) {

  return (
    <div className = 'rating-char-container'>
      {char && Object.keys(char).map((charName) => {
        return <SingleCharRating key={char[charName].id} charName = {charName} charScore={char[charName]}/>
      })}

    </div>
  )
}

export default CharRating;

