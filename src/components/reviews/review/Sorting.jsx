import React, {useState} from 'react';

const Sorting = function({num, sortFunc}) {
  const selectSort = function(e) {
    sortFunc(e.target.value);
  };

  return (
    <div className='review-custom-select'>
      <label className='reviewSummary'>{num} reviews, sorted by </label>
      <div className='review-custom-select'>
        <select className='reviewSummary' onChange = {selectSort}>
          <option value = 'relevant'>Relevant</option>
          <option value = 'helpful'>Helpful</option>
          <option value = 'newest'>Newest</option>
        </select>
        <span className='review-custom-arrow'></span>
      </div>

    </div>

    // <div className='review-custom-select'>
    //   <label className='reviewSummary'>{num} reviews, sorted by </label>
    //   <select className='reviewSummary' onChange = {selectSort}>
    //     <option value = 'relevant'>Relevant</option>
    //     <option value = 'helpful'>Helpful</option>
    //     <option value = 'newest'>Newest</option>
    //   </select>
    //   <span className='review-custom-arrow'></span>
    // </div>
  );
};

export default Sorting;
