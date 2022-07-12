import React, {useState} from 'react';

var SearchBar = function({reviews, sortFunc, modelFunc}) {
  const [searchWord, setSearchWord] = useState('');
  var handleSearch = function(e) {
    e.preventDefault();

  }
  return (
    <div>
      <form>
        <input type='text' placeholder='search'></input>
        <button onClick={handleSearch}>search</button>
      </form>
    </div>
  )
}

export default SearchBar;