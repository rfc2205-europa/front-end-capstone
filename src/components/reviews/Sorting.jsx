import React, {useState} from 'react';

var Sorting = function() {

  return (
    <div>
      <label>sort by </label>
      <select id = 'search'>
        <option value = 'none'>Helpful</option>
        <option value = 'year'>Newest</option>
        <option value = 'imdb'>Relevant</option>
      </select>
    </div>
  )
}

export default Sorting;