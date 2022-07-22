import React, {useState} from 'react';


const SearchBar = function({setDisplayReview, allReviews, setSearch}) {
  const [searchWord, setSearchWord] = useState('');
  const handleOnTimeSearch = function(e) {
    e.preventDefault();
    setSearchWord(e.target.value);
    setSearch(e.target.value);
    const filteredReview = allReviews.filter((singleReview) => {
      return singleReview.body.includes(e.target.value);
    });
    setDisplayReview(filteredReview);
  };

  const handleSearch = function(e) {
    e.preventDefault();

    // const filteredReview = allReviews.filter(singleReview =>
    //   singleReview.body.includes(searchWord));
    // setDisplayReview(filteredReview);
  };

  return (
    <div className='review-search-container'>
      <form>
        <input className='review-search-input' onChange={handleOnTimeSearch} type='text' placeholder='  search'></input>
        <button className='review-search-button' onClick={handleSearch}>search</button>
      </form>
    </div>
  );
};

export default SearchBar;
