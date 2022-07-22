import React, {useState} from 'react';

const SearchBar = function({reviews, sortFunc, modelFunc}) {
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = function(e) {
    e.preventDefault();
  };
  return (
    <div className='review-search-container'>
      <form>
        <input className='review-search-input' type='text' placeholder='  search'></input>
        <button className='review-search-button' onClick={handleSearch}>search</button>
      </form>
    </div>
  );
};

export default SearchBar;
