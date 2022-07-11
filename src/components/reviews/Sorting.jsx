import React, {useState} from 'react';

var Sorting = function({sortFunc}) {

  var selectSort = function(e) {
    sortFunc(e.target.value)
  }

  return (
    <div>
      <label>sort by </label>
      <select id = 'search' onChange = {selectSort}>
        <option value = 'helpful'>Helpful</option>
        <option value = 'newest'>Newest</option>
        <option value = 'relevant'>Relevant</option>
      </select>
    </div>
  )
}

export default Sorting;