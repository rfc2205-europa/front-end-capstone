import React, {useState} from 'react';

var Sorting = function({num, sortFunc}) {

  var selectSort = function(e) {
    sortFunc(e.target.value)
  }

  return (
    <div>
      <label className='reviewSummary'>{num} reviews, sorted by </label>
      <select className='reviewSummary' onChange = {selectSort}>

        <option value = 'relevant'>Relevant</option>
        <option value = 'helpful'>Helpful</option>
        <option value = 'newest'>Newest</option>
      </select>
    </div>
  )
}

export default Sorting;